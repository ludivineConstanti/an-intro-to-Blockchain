// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import triangle from 'src/assets/svg/interactives/triangle.svg';

// == Composant
const SubmitButton = ({ label }) => (
  <div className="submitButton">
    <input type="submit" value={label} />
    <div className="submitButton__triangle">
      <embed className="triangle" src={triangle} type="image/svg+xml" width="16" height="16" />
    </div>
  </div>
);

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

// == Export
export default SubmitButton;
