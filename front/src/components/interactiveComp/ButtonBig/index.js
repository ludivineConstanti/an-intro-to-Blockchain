// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import triangle from 'src/assets/svg/interactiveComp/triangle.svg';

// == Import
import './style.scss';

// == Composant
const ButtonBig = ({ label, path }) => (
  <div className="buttonBig">
    <Link
      to={{ pathname: { path } }}
    >{label}<div className="buttonBig__triangle"><embed src={triangle} type="image/svg+xml" width="16" height="16" /></div>
    </Link>
  </div>
);

ButtonBig.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// == Export
export default ButtonBig;
