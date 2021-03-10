// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitleSubCategory = ({ label }) => (
  <h2 className="titleSubCategory">{label}</h2>
);

TitleSubCategory.propTypes = {
  label: PropTypes.string.isRequired,
};

// == Export
export default TitleSubCategory;
