// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';

// == Composant
const LinkButton = ({
  label,
  path,
  className,
  onClickLink,
}) => {
  const classDiv = `linkButton linkButton--${className}`;
  const classTriangle = `linkButton__triangle linkButton__triangle--${className}`;
  return (
    <Link
      to={path}
      onClick={onClickLink}
    >
      <div className={classDiv}>
        {label}
        <div className={classTriangle}>
          <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

LinkButton.defaultProps = {
  className: 'size1',
  path: '',
  onClickLink: () => {},
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  className: PropTypes.string,
  onClickLink: PropTypes.func,
};

// == Export
export default LinkButton;
