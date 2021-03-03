// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitlePage = ({ label, subtitle }) => (
  <>
    <h1 className="titlePage">{label} { subtitle && <span className="titlePage__subtile">{subtitle}</span> }</h1>
  </>
);

TitlePage.defaultProps = {
  subtitle: '',
};

TitlePage.propTypes = {
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

// == Export
export default TitlePage;
