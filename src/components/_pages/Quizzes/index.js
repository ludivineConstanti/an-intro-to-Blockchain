// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';

// == Composant
const Quizzes = ({ getAllQuizzes, quizzesList }) => {
  console.log(quizzesList);
  // const categoryMax = 0;
  // quizzesList.map((quiz) => {
  //   quiz.category_name;
  // });
  useEffect(() => {
    getAllQuizzes();
  }, []);
  return (
    <div className="border-padding">
      <TitlePage label="Quizzes" />
      {/* {quizzesList.map(())} */}
      <CategoryQuiz />
      <CategoryQuiz />
      <CategoryQuiz />
    </div>
  );
};

Quizzes.propTypes = {
  getAllQuizzes: PropTypes.func,
  quizzesList: PropTypes.array.isRequired,
};

Quizzes.defaultProps = {
  getAllQuizzes: () => {},
};

// == Export
export default Quizzes;
