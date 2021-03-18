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
  getUserScores,
  quizzesList,
  language,
  userScore,
}) => {
  const score = Object.keys(userScore).map((element) => userScore[element]);
  Object.keys(quizzesList).forEach((name) => {
    quizzesList[name].forEach((element) => {
      const result = score.find((oneQuiz) => (oneQuiz.quizId === element.quiz_id));
      if (result) {
        element.score = result.scoreQuiz;
      }
      else {
        element.score = 0;
      }
    });
  });
  // without the language does not get updated
  const { t } = useTranslation();

  useEffect(() => {
    getAllQuizzes();
  }, [language]);

  useEffect(() => {
    getUserScores();
  }, []);

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
  getUserScores: PropTypes.func,
  quizzesList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  language: PropTypes.string.isRequired,
  userScore: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

Achievements.defaultProps = {
  getAllQuizzes: () => {},
  getUserScores: () => {},
};

// == Export
export default Achievements;
