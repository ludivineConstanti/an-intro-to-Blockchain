// == Import npm
import React from 'react';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Error = () => (
  <div className="error">
    <h1 className="error__title">404 <span className="error__subtitle">Not found</span></h1>
    <div className="error__redirectLink1">
      <LinkButton label="Read articles" path="/articles" />
    </div>
    <div className="error__redirectLink2">
      <LinkButton label="Play quizzes" path="/quizzes" />
    </div>
  </div>
);

// == Export
export default Error;
