// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const TitleCategory = ({ label, subtitle, specialCase }) => {
  const classDiv = specialCase ? `titleCategory titleCategory--${specialCase}` : 'titleCategory';
  return (
    <h2 className={classDiv}>{label}{ subtitle && <span className="titleCategory__subtile">{subtitle}</span> }</h2>
  );
};

TitleCategory.propTypes = {
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  specialCase: PropTypes.string,
};

TitleCategory.defaultProps = {
  subtitle: '',
  specialCase: '',
};

// == Export
export default TitleCategory;
