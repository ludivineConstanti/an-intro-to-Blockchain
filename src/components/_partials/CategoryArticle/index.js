// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import SubCategoryArticle from 'src/components/_partials/CategoryArticle/SubCategoryArticle';

// == Composant
const CategoryArticle = ({ title, content }) => {
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
    <div className="categoryArticle">
      <TitleCategory label={title} />
      {subCategoryArr}
    </div>
  );
};

CategoryArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

// == Export
export default CategoryArticle;
