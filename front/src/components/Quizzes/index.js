// == Import npm
import React from 'react';
import QuizInList from 'src/components/QuizInList';

// == Import
import quizzes from 'src/fakeData/Quizzes';
import './style.scss';

// == Composant
const Quizzes = () => (
  <>
    <h1 className="quizlol">PAGE AVEC TOUS LES QUIZ</h1>
    {quizzes.map((quiz) => (
      <QuizInList {...quiz} questionNumber={quiz.question.length} key={quiz.id} />
    ))}
  </>
);

// == Export
export default Quizzes;
