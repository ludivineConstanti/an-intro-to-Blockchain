// == Import npm
import React from 'react';

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
      externalLink
    />
  ));
  return (
    <div className="categoryQuiz">
      <TitleSubCategory label={title} />
      {articleLinks}
    </div>
  );
};

// == Export
export default SubCategoryArticle;
