// == Import npm
import React from 'react';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const QuizResult = () => (
  <div className="quizResult">
    <h1 className="quizResult__title"><span className="quizResult__titlePart1">70% <span className="quizResult__subtitle">Correct Answers</span></span> <span className="quizResult__titlePart2">Well done!</span></h1>
    <div className="quizResult__redirectLink1">
      <LinkButton label="Read recommended articles" path="/articles" />
    </div>
    <div className="quizResult__redirectLink2">
      <LinkButton label="Continue" path="/quizzes" />
    </div>
  </div>
);

// == Export
export default QuizResult;
