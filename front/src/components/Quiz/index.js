// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Quiz = ({
  id, category, title, questionNumber,
}) => (
  <div className="quiz_exposition">
    <p>ID du quiz : {id}</p>
    <p>Category du quiz : {category}</p>
    <p>Title du quiz : {title}</p>
    <p>Nombre de questions du quiz : {questionNumber}</p>
    <Link to={`/quiz/${id}`}>LIEN DU QUIZ IN NON-FOF</Link>
  </div>
);

Quiz.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
};

// == Export
export default Quiz;
