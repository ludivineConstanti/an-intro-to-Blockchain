// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const InputText = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <input
      className="inputText"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
    />
  );
};

InputText.defaultProps = {
  value: '',
  onChange: () => {},
  name: '',
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

// == Export
export default InputText;
