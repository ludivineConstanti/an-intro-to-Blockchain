// == Import npm
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryAchievement from 'src/components/_partials/CategoryAchievement';
import Loading from 'src/containers/Loading';

// == Composant
const Achievements = ({
  firstname,
  lastname,
  getAllQuizzes,
  quizzesList,
  language,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  useEffect(() => {
    getAllQuizzes();
  }, [language]);

  const categoryKeys = Object.keys(quizzesList);
  const categoryArr = [];

  categoryKeys.forEach((category) => {
    categoryArr.push(
      <CategoryAchievement
        key={category}
        title={category}
        content={quizzesList[category]}
      />,
    );
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (score) {
      setIsReady(true);
    }
  }, [score]);

  return isReady ? (
    <div className="border-padding">
      <div className="achievements">
        <TitlePage label={t('menu.achievements')} subtitle={`${firstname} ${lastname}`} />
        {categoryArr}
      </div>
    </div>
  ) : <Loading />;
};

Achievements.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  getAllQuizzes: PropTypes.func,
  quizzesList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  language: PropTypes.string.isRequired,
};

Achievements.defaultProps = {
  getAllQuizzes: () => {},
};

// == Export
export default Achievements;
