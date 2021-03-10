// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryArticle from 'src/components/_partials/CategoryArticle';

// == Composant
const Articles = ({
  getAllArticles, articlesList, loading, language,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  useEffect(() => {
    getAllArticles();
  }, [language]);
  const categoryKeys = Object.keys(articlesList);
  const categoryArr = [];

  return (
    <div className="border-padding">
      <TitlePage label={t('menu.articles')} />
      {
        categoryKeys.forEach((category) => {
          categoryArr.push(
            <CategoryArticle key={category} title={category} content={articlesList[category]} />,
          );
        })
      }
      {categoryArr}
    </div>
  );
};

Articles.propTypes = {
  getAllArticles: PropTypes.func,
  articlesList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

Articles.defaultProps = {
  getAllArticles: () => {},
};

// == Export
export default Articles;
