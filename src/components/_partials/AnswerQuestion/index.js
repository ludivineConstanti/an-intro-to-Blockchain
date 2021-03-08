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
  progressionNum,
  justification,
  articleLink,
  increaseQuestion,
  //! Message de succès ou non pas encore fait mais à réflechir
}) => {
  const nextQuestion = () => {
    increaseQuestion();
  };
  return (
    <section className="answerQuestion">
      <TitlePage label="So close!" />
      <p className="answerQuestion__justification ">{justification}</p>
      <div className="answerQuestion__links">
        <LinkButton label="Learn more" path={articleLink} />
        {totalNum !== progressionNum
          ? <SubmitButton label="Next question" onClick={nextQuestion} />
          : <LinkButton label="Results" path="/quiz/:id/result" />}
      </div>
    </section>
  );
};

AnswerQuestion.propTypes = {
  totalNum: PropTypes.number.isRequired,
  progressionNum: PropTypes.number.isRequired,
  justification: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  increaseQuestion: PropTypes.func.isRequired,
};

// == Export
export default AnswerQuestion;
