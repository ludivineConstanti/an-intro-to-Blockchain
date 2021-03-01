// == Import npm
import React from 'react';

// == Import
// import quizzes from 'src/fakeData/Quizzes';
import './style.scss';
import FormQuestion from 'src/components/_partials/FormQuestion';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';

// == Composant
const Quiz = () => (
  <div className="quiz">
    {/* début de ton quiz : créer ta première (première question)
  créer un 2ème composant (la réponse)
  suivant => transition, loading mis en true s
  tra,sition finie, loading se met en false
  là, on supprime l'ancien et on charge le suivant */}
    <FormQuestion />
    <AnswerQuestion />
  </div>
);

// == Export
export default Quiz;
