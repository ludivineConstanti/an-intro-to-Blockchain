// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import ProgressBar from 'src/components/_partials/CategoryAchievement/ProgressBar';
import QuizAchievement from 'src/components/_partials/CategoryAchievement/QuizAchievement';

// == Composant
const CategoryAchievement = ({ title, content }) => {
  let quizCounter = 0;
  let score = 0;

  content.forEach((element) => {
    score += element.score;
    quizCounter += 1;
  });
  const categoryAverageScore = Math.round(score / quizCounter * 10) / 10;

  const quizLinks = content.map((quiz) => (
    <QuizAchievement
      key={quiz.quiz_id}
      quizId={quiz.quiz_id}
      categoryId={quiz.categoryId}
      label={quiz.quiz_title}
      score={quiz.score}
      done={quiz.done}
    />
  ));
  return (
    <div className="categoryAchievement">
      <div className="categoryAchievement__category">
        <TitleCategory label={title} specialCase="noMarginBottom" />
        <ProgressBar percentage={categoryAverageScore} useCase="title" />
      </div>
      <div className="categoryAchievement__quizContainer">
        {quizLinks}
      </div>
    </div>
  );
};

CategoryAchievement.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

// == Export
export default CategoryAchievement;
