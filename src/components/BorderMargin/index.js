// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const BorderMargin = ({ children }) => (
  <div className="borderMargin">
    {children}
  </div>
);

BorderMargin.propTypes = {
  children: PropTypes.object.isRequired,
};

// == Export
export default BorderMargin;
