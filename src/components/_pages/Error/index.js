// == Import npm
import React from 'react';

// == Import
import './style.scss';
import LinkS1 from 'src/components/_interactives/_buttons/LinkS1';

// == Composant
const Error = () => (
  <div className="error">
    <h1 className="error__title">404 <span className="error__subtitle">Not found</span></h1>
    <nav className="error__redirectLinks">
      <LinkS1 label="Read articles" path="/articles" />
      <LinkS1 label="Play quizzes" path="/quizzes" />
    </nav>
  </div>
);

// == Export
export default Error;
