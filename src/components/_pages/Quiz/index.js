// == Import npm
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ProgressionBar from 'src/components/_statics/ProgressionBar';
import FormQuestion from 'src/containers/_partials/FormQuestion';
import AnswerQuestion from 'src/containers/_partials/AnswerQuestion';
import Loading from 'src/containers/Loading';

// == Composant
const Quiz = ({
  getOneQuiz,
  quizData,
  questionNumber,
  questionId,
  showAnswer,
  language,
}) => {
  const { id } = useParams();
  useEffect(() => {
    getOneQuiz(id);
  }, [language]);
  const [isReady, setIsReady] = useState(false);
  const currentQuestionData = quizData[`question${questionId}`];

  useEffect(() => {
    if (quizData.totalQuestions) {
      setIsReady(true);
    }
  }, [quizData]);

  return isReady
    ? (
      <>
        <ProgressionBar totalNum={quizData.totalQuestions} progressionNum={questionNumber} />
        <div className="quiz">
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
};

Quiz.defaultProps = {
  getOneQuiz: () => {},
};

// == Export
export default Quiz;
