// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const ProgressionSquare = ({ status }) => {
  const outsideClass = `progressionSquare progressionSquare--${status}`;
  const insideClass = `progressionSquare__inside progressionSquare__inside--${status}`;
  return (
    <div className={outsideClass}>
      <div className={insideClass} />
    </div>
  );
};

ProgressionSquare.propTypes = {
  status: PropTypes.string.isRequired,
};

// == Export
export default ProgressionSquare;
