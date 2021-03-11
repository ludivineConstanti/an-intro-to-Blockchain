// == Import npm
import React from 'react';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import ProgressBar from 'src/components/_partials/CategoryAchievement/ProgressBar';
import QuizAchievement from 'src/components/_partials/CategoryAchievement/QuizAchievement';

// == Composant
const CategoryAchievement = () => {
  // without the language does not get updated
  const { t } = useTranslation();
  return (
    <div className="categoryAchievement">
      <div className="categoryAchievement__category">
        <TitleCategory label="Category" noMarginBottom />
        <ProgressBar />
      </div>
      <div className="categoryAchievement__quizContainer">
        <QuizAchievement />
        <QuizAchievement />
        <QuizAchievement />
        <QuizAchievement />
        <QuizAchievement />
      </div>
    </div>
  );
};

// == Export
export default CategoryAchievement;
