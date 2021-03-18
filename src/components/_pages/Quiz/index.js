// == Import npm
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import ProgressionBar from 'src/components/_statics/ProgressionBar';
import FormQuestion from 'src/containers/_partials/FormQuestion';
import AnswerQuestion from 'src/containers/_partials/AnswerQuestion';
import CloseIcon from 'src/containers/_interactives/_buttonsHeader/CloseIcon';
import MessagePopUp from 'src/containers/_partials/MessagePopUp';
import Loading from 'src/containers/Loading';
import About from 'src/containers/_partials/About';

// == Composant
const Quiz = ({
  getOneQuiz,
  quizData,
  questionNumber,
  questionId,
  showAnswer,
  language,
  showPopUp,
  showAbout,
}) => {
  // checks if the language was updated
  const { t } = useTranslation();

  const { id } = useParams();

  useEffect(() => {
    getOneQuiz(id);
  }, [language]);

  const [isReady, setIsReady] = useState(false);
  const currentQuestionData = quizData[`question${questionId}`];

  useEffect(() => {
    if (quizData[`question${quizData.idFirstQuestion}`]) {
      setIsReady(true);
    }
  }, [quizData]);

  const refQuiz = useRef('');
  const quizHeight = refQuiz.current.clientHeight;

  return isReady
    ? (
      <>
        <CloseIcon useCase="showPopUp" />
        {showAbout && <div className="quiz__backgroundAbout" style={{ height: `${quizHeight}px` }} />}
        <About />
        { showPopUp && <MessagePopUp label={t('quiz.popUp.label')} text={t('quiz.popUp.text')} useCase="keepPlaying" />}
        <ProgressionBar totalNum={quizData.totalQuestions} progressionNum={questionNumber} />
        <div className="quiz" ref={refQuiz}>
          {!showAnswer
            ? <FormQuestion question={currentQuestionData} answerShowed={false} />
            : (
              <>
                <FormQuestion question={currentQuestionData} answerShowed />
                <AnswerQuestion
                  totalNum={quizData.totalQuestions}
                  questionNumber={questionNumber}
                  questionData={currentQuestionData}
                  language={language}
                />
              </>
            )}

        </div>
      </>
    ) : <Loading />;
};

Quiz.propTypes = {
  getOneQuiz: PropTypes.func,
  quizData: PropTypes.object.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  showPopUp: PropTypes.bool.isRequired,
  showAbout: PropTypes.bool.isRequired,
};

Quiz.defaultProps = {
  getOneQuiz: () => {},
};

// == Export
export default Quiz;
