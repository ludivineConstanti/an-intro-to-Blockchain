// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const AnswerQuestion = ({
  totalNum,
  progressionNum,
  justification,
  articleLink,
  //! Message de succès ou non pas encore fait mais à réflechir
}) => (
  <section className="answerQuestion">
    <TitlePage label="So close!" />
    <p className="answerQuestion__justification">{justification}</p>
    <div className="answerQuestion__links">
      <LinkButton label="Learn more" path={articleLink} />
      {totalNum !== progressionNum
        ? <LinkButton label="Next question" path="?" />
        : <LinkButton label="Results" path="/quiz/:id/result" />}
    </div>
  </section>
);

AnswerQuestion.propTypes = {
  totalNum: PropTypes.number.isRequired,
  progressionNum: PropTypes.number.isRequired,
  justification: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
};

// == Export
export default AnswerQuestion;
