// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import './animation.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import CategoryArticle from 'src/components/_partials/CategoryArticle';
import Loading from 'src/containers/Loading';

// == Composant
const Articles = ({
  getAllArticles, articlesList, language,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  useEffect(() => {
    getAllArticles();
  }, [language]);
  const categoryKeys = Object.keys(articlesList);
  const categoryArticleArr = [];
  const categoryNavArr = [];
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (articlesList[categoryKeys[0]]) {
      setIsReady(true);
    }
  }, [articlesList]);

  categoryKeys.forEach((category) => {
    categoryArticleArr.push(
      <div id={category}>
        <CategoryArticle key={category} title={category} content={articlesList[category]} />
      </div>,
    );
    categoryNavArr.push(<a className="article__nav__link" href={`#${category}`}>{category}</a>);
  });

  return isReady ? (
    <div className="border-padding">
      <div className="article">
        <TitlePage label={t('menu.articles')} />
        {categoryArticleArr}
        <div className="article__nav">{categoryNavArr}</div>
      </div>
    </div>
  ) : <Loading />;
};

Articles.propTypes = {
  getAllArticles: PropTypes.func,
  articlesList: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

Articles.defaultProps = {
  getAllArticles: () => {},
};

// == Export
export default Articles;
