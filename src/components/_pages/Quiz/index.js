// == Import npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ProgressionBar from 'src/components/_statics/ProgressionBar';
import FormQuestion from 'src/components/_partials/FormQuestion';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';

// == Composant
const Quiz = ({
  getOneQuiz,
  quizData,
  currentQuestion,
  showAnswer,
}) => {
  const { id } = useParams();
  useEffect(() => {
    getOneQuiz(id);
  }, []);
  if (quizData.question1) {
    const currentQuestionData = quizData[`question${currentQuestion}`];
    return (
      <>
        <ProgressionBar totalNum={quizData.infos.totalQuestions} progressionNum={currentQuestion} />
        <div className="quiz">
          {!showAnswer
            ? <FormQuestion question={currentQuestionData} />
            : (
              <AnswerQuestion
                totalNum={quizData.infos.totalQuestions}
                progressionNum={currentQuestion}
                justification={currentQuestionData.justification}
                articleLink={currentQuestionData.articleLink}
              />
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
  quizData: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  showAnswer: PropTypes.bool.isRequired,
};

Quiz.defaultProps = {
  getOneQuiz: () => {},
};

// == Export
export default Quiz;
