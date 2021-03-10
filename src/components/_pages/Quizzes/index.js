// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';

// == Composant
const Quizzes = ({
  getAllQuizzes, quizzesList, loading, language,
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
      <CategoryQuiz
        key={category}
        title={category}
        content={quizzesList[category]}
      />,
    );
  });
  return (
    <div className="border-padding">
      <TitlePage label={t('menu.quizzes')} />
      {categoryArr}
    </div>
  );
};

Quizzes.propTypes = {
  getAllQuizzes: PropTypes.func,
  quizzesList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

Quizzes.defaultProps = {
  getAllQuizzes: () => {},
};

// == Export
export default Quizzes;
