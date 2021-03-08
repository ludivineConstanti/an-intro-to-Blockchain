// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';

// == Composant
const SubmitButton = ({
  label,
  className,
  onClick,
}) => {
  const classDiv = `submitButton submitButton--${className}`;
  const classTriangle = `submitButton__triangle submitButton__triangle--${className}`;
  return (
    <button type="submit" className={classDiv} onClick={onClick}>
      {label}
      <div className={classTriangle}>
        <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
        </svg>
      </div>
    </button>
  );
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SubmitButton.defaultProps = {
  className: 'size1',
  onClick: () => {},
};

// == Export
export default SubmitButton;
