// == Import npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ProgressionBar from 'src/components/_statics/ProgressionBar';
import FormQuestion from 'src/components/_partials/FormQuestion';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';

// == Composant
const Quiz = ({ getOneQuiz, quiz }) => {
  const { id } = useParams();
  useEffect(() => {
    getOneQuiz(id);
  }, []);
  console.log(quiz);
  return (
    <>
      <ProgressionBar totalNum={10} progressionNum={7} />
      <div className="quiz">
        <FormQuestion />
        <AnswerQuestion />
      </div>
    </>
  );
};

Quiz.propTypes = {
  getOneQuiz: PropTypes.func,
  quiz: PropTypes.array.isRequired,
};

Quiz.defaultProps = {
  getOneQuiz: () => {},
};

// == Export
export default Quiz;
