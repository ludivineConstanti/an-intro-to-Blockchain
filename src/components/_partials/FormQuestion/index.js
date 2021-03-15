// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
  // checks if the language was updated
  const { t } = useTranslation();

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

  return (
    <form className="formQuestion" onSubmit={confirmQuestion}>
      <h3 className="formQuestion__text">{question.statement}
        {!answerShowed
        && (
        <span className="formQuestion__instruction">
          {question.totalGoodAnswer === 1 ? t('quiz.numberAnswersSingular')
            : t('quiz.numberAnswersPlural')}
        </span>
        )}
      </h3>
      {
        question.answers.map((answer) => (
          <CheckboxAnswer
            key={answer.id}
            {...{ oneAnswer: answer }}
            disabled={!!answerShowed}
            answer={userAnswer}
          />
        ))
      }
      {!answerShowed && (<SubmitButton label="Validate" />)}
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
