// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const FormUser = ({ children, className }) => {
  const classDiv = `formUser formUser--${className}`;
  return (
    <div className={classDiv}>
      {children}
    </div>
  );
};

FormUser.defaultProps = {
  className: 'default',
};

FormUser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
};

// == Export
export default FormUser;
