// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitleSubCategory from 'src/components/_statics/TitleSubCategory';
import LinkCTA from 'src/components/_interactives/LinkCTA';

// == Composant
const SubCategoryArticle = ({ title, content }) => {
  console.log('sub category article', content);
  const articleLinks = content.map((article) => (
    <LinkCTA
      key={article.question_id}
      label={article.article_title}
      content={article}
      categoryId={article.category_id}
      quizId={article.quizId}
    />
  ));
  console.log(articleLinks);
  return (
    <div className="categoryQuiz">
      <TitleSubCategory label={title} />
      {articleLinks}
    </div>
  );
};

// == Export
export default SubCategoryArticle;
