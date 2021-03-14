// == Import npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ProgressionBar from 'src/components/_statics/ProgressionBar';
import FormQuestion from 'src/containers/_partials/FormQuestion';
import AnswerQuestion from 'src/containers/_partials/AnswerQuestion';

// == Composant
const Quiz = ({
  getOneQuiz,
  quizData,
  questionNumber,
  showAnswer,
  language,
}) => {
  const { id } = useParams();
  useEffect(() => {
    getOneQuiz(id);
  }, [language]);
  if (quizData.question1) {
    const currentQuestionData = quizData[`question${questionNumber}`];
    return (
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
    );
  }

  return (
    <>
    </>
  );
};

Quiz.propTypes = {
  getOneQuiz: PropTypes.func,
  quizData: PropTypes.object.isRequired,
  questionNumber: PropTypes.number.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

Quiz.defaultProps = {
  getOneQuiz: () => {},
};

// == Export
export default Quiz;
