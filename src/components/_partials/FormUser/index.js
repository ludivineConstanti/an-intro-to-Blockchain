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
  children: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

// == Export
export default FormUser;
