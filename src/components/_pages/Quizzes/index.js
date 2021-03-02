// == Import npm
import React from 'react';

// == Import
import './style.scss';
import BorderMargin from 'src/components/BorderMargin';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';

// == Composant
const Quizzes = () => (
  <BorderMargin>
    <TitlePage label="Quizzes" />
    <CategoryQuiz />
    <CategoryQuiz />
    <CategoryQuiz />
  </BorderMargin>
);

// == Export
export default Quizzes;
