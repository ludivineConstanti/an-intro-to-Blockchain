// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const FormUser = ({ children }) => (
  <div className="formUser">
    {children}
  </div>
);

// == Export
export default FormUser;
