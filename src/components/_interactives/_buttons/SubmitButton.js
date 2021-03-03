// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import triangle from 'src/assets/svg/interactives/triangle.svg';

// == Composant
const SubmitButton = ({ label, className }) => {
  const classDiv = `submitButton submitButton--${className}`;
  const classTriangle = `submitButton__triangle submitButton__triangle--${className}`;
  return (
    <div className={classDiv}>
      <input type="submit" value={label} />
      <div className={classTriangle}>
        <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
        </svg>
      </div>
    </div>
  );
};

SubmitButton.defaultProps = {
  className: 'size1',
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// == Export
export default SubmitButton;
