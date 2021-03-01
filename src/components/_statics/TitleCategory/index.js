// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitleCategory = ({ label }) => (
  <h2 className="titleCategory">{label}</h2>
);

TitleCategory.propTypes = {
  label: PropTypes.string.isRequired,
};

// == Export
export default TitleCategory;
