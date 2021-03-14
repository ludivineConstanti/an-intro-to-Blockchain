// == Import npm
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

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

Achievements.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

// == Export
export default Achievements;
