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
      <LinkButton label="Learn more" path="/" />
      {/* Si le nombre de question est égale au numéro de la question, switch de lien */}
      <LinkButton label="Next question" path="?" />
      <LinkButton label="Results" path="/quiz/:id/result" />
    </div>
  </section>
);

// == Export
export default AnswerQuestion;
