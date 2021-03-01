// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitlePage = ({ label }) => (
  <h1 className="titlePage">{label}</h1>
);

TitlePage.propTypes = {
  label: PropTypes.string.isRequired,
};

// == Export
export default TitlePage;
