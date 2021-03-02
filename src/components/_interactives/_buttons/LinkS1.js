// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import triangle from 'src/assets/svg/interactives/triangle.svg';

// == Composant
const LinkS1 = ({ label, path }) => (
  <div className="linkS1">
    <Link
      to={path}
    >{label}
      <div className="linkS1__triangle">
        <embed className="triangle" src={triangle} type="image/svg+xml" width="16" height="16" />
      </div>
    </Link>
  </div>
);

LinkS1.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// == Export
export default LinkS1;
