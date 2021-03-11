// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitleSubCategory from 'src/components/_statics/TitleSubCategory';
import LinkCTA from 'src/components/_interactives/LinkCTA';

// == Composant
const SubCategoryArticle = ({ title, content }) => {
  const articleLinks = content.map((article) => (
    <LinkCTA
      key={article.question_id}
      quizId={article.quizId}
      categoryId={article.category_id}
      label={article.article_title}
      path={article.article_link}
      externalLink
    />
  ));
  return (
    <div className="subCategoryArticle">
      <TitleSubCategory label={title} />
      <div className="subCategoryArticle__linkCTA">
        {articleLinks}
      </div>
    </div>
  );
};

SubCategoryArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

// == Export
export default SubCategoryArticle;
