// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const LinkButton = ({ label, path, className }) => {
  const classDiv = `linkButton linkButton--${className}`;
  const classTriangle = `linkButton__triangle linkButton__triangle--${className}`;
  return (
    <div className={classDiv}>
      <Link
        to={path}
      >{label}
        <div className={classTriangle}>
          <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

LinkButton.defaultProps = {
  className: 'size1',
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// == Export
export default LinkButton;
