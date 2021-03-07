// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import CheckboxAnswer from 'src/components/_interactives/CheckboxAnswer';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';

// == Composant
const FormQuestion = ({ question }) => {
  const answerArray = [];
  for (let i = 1; i < question.totalAnswer + 1; i += 1) {
    answerArray.push({
      id: question[`answer${i}`].id,
      title: question[`answer${i}`].title,
      goodAnswer: question[`answer${i}`].goodAnswer,
    });
  }
  return (
    <form className="formQuestion">
      <h3 className="formQuestion__text">{question.statement}</h3>
      <p className="formQuestion__instruction">{question.totalGoodAnswer === 1 ? 'Only one correct answer' : 'More than one answer can be right'}</p>
      {
        answerArray.map((oneAnswer) => (
          <CheckboxAnswer key={oneAnswer.id} {...{ oneAnswer }} />
        ))
      }
      <SubmitButton label="Validate" />
    </form>
  );
};

FormQuestion.propTypes = {
  question: PropTypes.object.isRequired,
};

// == Export
export default FormQuestion;
