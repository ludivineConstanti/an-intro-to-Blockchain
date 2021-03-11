// == Import npm
import React from 'react';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryAchievement from 'src/components/_partials/CategoryAchievement';

// == Composant
const Achievements = ({ firstname, lastname }) => {
  // without the language does not get updated
  const { t } = useTranslation();
  return (
    <div className="border-padding">
      <div className="achievements">
        <TitlePage label={t('menu.achievements')} subtitle={`${firstname} ${lastname}`} />
        <CategoryAchievement />
        <CategoryAchievement />
        <CategoryAchievement />
        <CategoryAchievement />
      </div>
    </div>
  );
};

// == Export
export default Achievements;
