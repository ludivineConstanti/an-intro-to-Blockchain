// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitleCategory = ({ label, noMarginBottom }) => {
  const classDiv = noMarginBottom ? 'titleCategory titleCategory--noMarginBottom' : 'titleCategory';
  return (
    <h2 className={classDiv}>{label}</h2>
  );
};

TitleCategory.propTypes = {
  label: PropTypes.string.isRequired,
  noMarginBottom: PropTypes.bool,
};

TitleCategory.defaultProps = {
  noMarginBottom: false,
};

// == Export
export default TitleCategory;
