// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitleCategory = ({ label, specialCase }) => {
  const classDiv = specialCase ? `titleCategory titleCategory--${specialCase}` : 'titleCategory';
  return (
    <h2 className={classDiv}>{label}</h2>
  );
};

TitleCategory.propTypes = {
  label: PropTypes.string.isRequired,
  specialCase: PropTypes.string,
};

TitleCategory.defaultProps = {
  specialCase: '',
};

// == Export
export default TitleCategory;
