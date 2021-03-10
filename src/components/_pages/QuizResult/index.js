// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const QuizResult = ({ score, totalAnswers, goodAnswers }) => (
  <div className="quizResult">
    <h1 className="quizResult__title"><span className="quizResult__titlePart1">{score} % <span className="quizResult__subtitle">{goodAnswers} correct answers out of {totalAnswers}</span></span> <span className="quizResult__titlePart2">Well done!</span></h1>
    <div className="quizResult__redirectLink1">
      <LinkButton label="Read recommended articles" path="/articles" />
    </div>
    <div className="quizResult__redirectLink2">
      <LinkButton label="Continue" path="/quizzes" />
    </div>
  </div>
);

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
  totalAnswers: PropTypes.number.isRequired,
  goodAnswers: PropTypes.number.isRequired,
};

// == Export
export default QuizResult;
