// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const InputText = ({ type, label, value }) => (
  <div className="inputText">
    <input type={type} placeholder={label} value={value} />
  </div>
);

InputText.defaultProps = {
  value: '',
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

// == Export
export default InputText;
