// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const ProgressBar = ({ percentage }) => {
  const percentageValue = `${percentage}%`;
  return (
    <div className="progressBar">
      <p className="progressBar__text">{percentage}%</p>
      <div className="progressBar__bar">
        <div className="progressBar__bar__border" />
        <div className="progressBar__bar__center" />
        <div className="progressBar__bar__progression" style={{ width: percentageValue }} />
        <div className="progressBar__bar__border" />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

// == Export
export default ProgressBar;
