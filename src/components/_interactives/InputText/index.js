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
  className,
}) => {
  const classDiv = `inputText inputText--${className}`;
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <input
      className={classDiv}
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
  className: '',
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
};

// == Export
export default InputText;
