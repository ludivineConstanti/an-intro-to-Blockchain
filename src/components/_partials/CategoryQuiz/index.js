// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import LinkCTA from 'src/components/_interactives/LinkCTA';

// == Composant
const CategoryQuiz = () => (
  <div className="categoryQuiz">
    <TitleCategory label="Blockchain" />
    <div className="categoryQuiz__groupLinks">
      <div className="categoryQuiz__linkCTA">
        <LinkCTA category={1} quiz={1} />
        <LinkCTA category={0} quiz={1} />
        <LinkCTA category={0} quiz={2} />
        <LinkCTA category={0} quiz={3} />
        <LinkCTA category={0} quiz={4} />
      </div>
    </div>
  </div>
);

/* CategoryQuiz.propTypes = {
  label: PropTypes.string.isRequired,
}; */

// == Export
export default CategoryQuiz;
