// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import CheckboxAnswer from 'src/components/_interactives/CheckboxAnswer';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';

// == Composant
const FormQuestion = ({
  question,
  stockAnswer,
  validateQuestion,
  answerShowed,
  userAnswer,
}) => {
  const confirmQuestion = (event) => {
    const userAnswers = {};
    event.preventDefault();
    userAnswers[`question${question.id}`] = {};
    for (let i = 0; i < event.target.length - 1; i += 1) {
      userAnswers[`question${question.id}`][`answer${event.target[i].id}`] = event.target[i].checked;
    }
    stockAnswer(userAnswers, question.id);
    validateQuestion();
  };

  const answerArray = [];
  for (let i = 1; i < question.totalAnswer + 1; i += 1) {
    answerArray.push({
      id: question[`answer${i}`].id,
      title: question[`answer${i}`].title,
      goodAnswer: question[`answer${i}`].goodAnswer,
      userAnswer: userAnswer[`answer${question[`answer${i}`].id}`],
    });
  }
  return (
    <form className="formQuestion" onSubmit={confirmQuestion}>
      <h3 className="formQuestion__text">{question.statement}</h3>
      {answerShowed === false
      && (<p className="formQuestion__instruction">{question.totalGoodAnswer === 1 ? 'Only one correct answer' : 'More than one answer can be right'}</p>)}
      {
        answerArray.map((oneAnswer) => (
          <CheckboxAnswer
            key={oneAnswer.id}
            {...{ oneAnswer }}
            disabled={!!answerShowed}
            answer={userAnswer}
          />
        ))
      }
      {answerShowed === false
      && (<SubmitButton label="Validate" />)}
    </form>
  );
};

FormQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  validateQuestion: PropTypes.func,
  stockAnswer: PropTypes.func,
  answerShowed: PropTypes.bool.isRequired,
  userAnswer: PropTypes.object,
};

FormQuestion.defaultProps = {
  validateQuestion: () => {},
  stockAnswer: () => {},
  userAnswer: {},
};

// == Export
export default FormQuestion;
