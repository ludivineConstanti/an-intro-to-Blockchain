// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';

// == Composant
const Quizzes = () => (
  <div className="border-padding">
    <TitlePage label="Quizzes" />
    <CategoryQuiz />
    <CategoryQuiz />
    <CategoryQuiz />
  </div>
);

// == Export
export default Quizzes;
