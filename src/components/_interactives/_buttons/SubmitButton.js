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
        <embed className="triangle" src={triangle} type="image/svg+xml" width="16" height="16" />
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
