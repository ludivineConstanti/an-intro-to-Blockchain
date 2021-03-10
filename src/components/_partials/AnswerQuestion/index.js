// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';

// == Composant
const AnswerQuestion = ({
  totalNum,
  questionNumber,
  justification,
  articleLink,
  increaseQuestion,
}) => {
  const nextQuestion = () => {
    increaseQuestion(questionNumber + 1);
  };
  return (
    <section className="answerQuestion">
      <TitlePage label="So close!" />
      <p className="answerQuestion__justification ">{justification}</p>
      <div className="answerQuestion__links">
        <LinkButton label="Learn more" path={articleLink} />
        {totalNum !== questionNumber
          ? <SubmitButton label="Next question" onClick={nextQuestion} />
          : <LinkButton label="Results" path="/quiz/:id/result" />}
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
};

// == Export
export default AnswerQuestion;
