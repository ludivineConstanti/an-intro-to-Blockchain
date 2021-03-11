// == Import npm
import React from 'react';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import QuizAchievement from 'src/components/_partials/CategoryAchievement/QuizAchievement';

// == Composant
const CategoryAchievement = () => {
  // without the language does not get updated
  const { t } = useTranslation();
  return (
    <div className="categoryAchievement">
      <TitleCategory label="Category" />
      <QuizAchievement />
      <QuizAchievement />
      <QuizAchievement />
      <QuizAchievement />
      <QuizAchievement />
    </div>
  );
};

// == Export
export default CategoryAchievement;
