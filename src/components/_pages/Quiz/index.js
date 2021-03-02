// == Import npm
import React from 'react';

// == Import
// import quizzes from 'src/fakeData/Quizzes';
import './style.scss';
import ProgressionBar from 'src/components/_statics/ProgressionBar';
import BorderMargin from 'src/components/BorderMargin';
import FormQuestion from 'src/components/_partials/FormQuestion';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';

// == Composant
const Quiz = () => (
  <>
    <ProgressionBar totalNum={10} progressionNum={7} />
    <div className="quiz">
      <FormQuestion />
      <AnswerQuestion />
    </div>
  </>
);

// == Export
export default Quiz;
