// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';

// == Composant
const Quizzes = ({ getAllQuizzes, quizzesList, loading }) => {
  useEffect(() => {
    getAllQuizzes();
  }, []);
  let categoryMax = 1;
  quizzesList.forEach((element) => {
    if (element.categoryId >= categoryMax) {
      categoryMax = element.categoryId;
    }
  });
  const quizObject = [];
  for (let i = 1; i < categoryMax + 1; i += 1) {
    quizObject.push(quizzesList.filter((element) => (element.categoryId === i)));
  }
  return (
    <div className="border-padding">
      <TitlePage label="Quizzes" />
      {(!loading && quizObject.length >= 3)
      && quizObject.map((oneCategory) => (
        <CategoryQuiz key={oneCategory[0].categoryId} {...[oneCategory]} />
      ))}
    </div>
  );
};

Quizzes.propTypes = {
  getAllQuizzes: PropTypes.func,
  quizzesList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

Quizzes.defaultProps = {
  getAllQuizzes: () => {},
};

// == Export
export default Quizzes;
