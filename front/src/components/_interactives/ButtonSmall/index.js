// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const ButtonSmall = ({ label, path }) => (
  <Link
    classname="buttonSmall"
    to={path}
  >{label}
  </Link>
);

ButtonSmall.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// == Export
export default ButtonSmall;
