// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import explanationScore from './explanationScore';

// == Composant
const AnswerQuestion = ({
  totalNum,
  questionNumber,
  justification,
  articleLink,
  increaseQuestion,
  validateQuiz,
  questionData,
  userAnswer,
  language,
}) => {
  const nextQuestion = () => {
    increaseQuestion(questionNumber + 1);
  };

  const explanationMessage = explanationScore(questionNumber, questionData, userAnswer, language);

  return (
    <section className="answerQuestion">
      <TitleCategory
        label={explanationMessage.label}
        subtitle={explanationMessage.subtitle}
      />
      <p className="answerQuestion__justification ">{justification}</p>
      <div className="answerQuestion__links">
        <LinkButton label="Learn more" path={articleLink} externalLink />
        {totalNum !== questionNumber
          ? <SubmitButton label="Next question" onClick={nextQuestion} />
          : <LinkButton label="Results" path="/quizResult" onClickLink={validateQuiz} />}
      </div>
    </section>
  );
};

AnswerQuestion.propTypes = {
  totalNum: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
  justification: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  increaseQuestion: PropTypes.func.isRequired,
  validateQuiz: PropTypes.func.isRequired,
  questionData: PropTypes.array.isRequired,
  userAnswer: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

// == Export
export default AnswerQuestion;
