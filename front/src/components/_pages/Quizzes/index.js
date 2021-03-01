// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';

// == Composant
const Quizzes = () => (
  <>
    <TitlePage label="Quizzes" />
    <CategoryQuiz />
    <CategoryQuiz />
    <CategoryQuiz />
  </>
);

// == Export
export default Quizzes;
