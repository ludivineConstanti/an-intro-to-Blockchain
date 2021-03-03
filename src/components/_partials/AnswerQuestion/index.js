// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const AnswerQuestion = () => (
  <section className="answerQuestion">
    <TitlePage label="So close!" />
    <p className="answerQuestion__justification">
      937 caractères, c'était trop pour ESLint, donc voilà
    </p>
    <div className="answerQuestion__links">
      <LinkButton label="Learn more" />
      <LinkButton label="Next" path="/quiz/:id/result" />
    </div>
  </section>
);

// == Export
export default AnswerQuestion;
