// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryQuiz from 'src/components/_partials/CategoryQuiz';
import Loading from 'src/containers/Loading';

// == Composant
const Quizzes = ({
  getAllQuizzes, quizzesList, language,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  useEffect(() => {
    getAllQuizzes();
  }, [language]);

  const categoryKeys = Object.keys(quizzesList);
  const categoryArr = [];
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (quizzesList[categoryKeys[0]]) {
      setIsReady(true);
    }
  }, [quizzesList]);

  categoryKeys.forEach((category) => {
    categoryArr.push(
      <CategoryQuiz
        key={category}
        title={category}
        content={quizzesList[category]}
      />,
    );
  });

  return isReady ? (
    <div className="border-padding">
      <TitlePage label={t('menu.quizzes')} />
      {categoryArr}
    </div>
  ) : <Loading />;
};

Quizzes.propTypes = {
  getAllQuizzes: PropTypes.func,
  quizzesList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  language: PropTypes.string.isRequired,
};

Quizzes.defaultProps = {
  getAllQuizzes: () => {},
};

// == Export
export default Quizzes;
