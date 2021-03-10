// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import SubCategoryArticle from 'src/components/_partials/CategoryArticle/SubCategoryArticle';
import LinkCTA from 'src/components/_interactives/LinkCTA';

// == Composant
const CategoryArticle = ({ title, content }) => {
  // console.log('category Article', content);
  const subCategoryKeys = Object.keys(content);

  const subCategoryArr = [];
  subCategoryKeys.forEach((subCategory) => {
    subCategoryArr.push(
      <SubCategoryArticle
        key={subCategory}
        title={subCategory}
        content={content[subCategory]}
      />,
    );
  });
  return (
    <div className="categoryQuiz">
      <TitleCategory label={title} />
      <div className="categoryQuiz__groupLinks">
        <div className="categoryQuiz__linkCTA">
          {subCategoryArr}
        </div>
      </div>
    </div>
  );
};

// == Export
export default CategoryArticle;
