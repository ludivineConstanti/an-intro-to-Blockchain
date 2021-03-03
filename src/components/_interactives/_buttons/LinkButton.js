// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import triangle from 'src/assets/svg/interactives/triangle.svg';

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
          <embed className="triangle" src={triangle} type="image/svg+xml" />
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
