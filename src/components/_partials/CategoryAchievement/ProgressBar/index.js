// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const ProgressBar = ({ percentage, useCase }) => {
  const percentageValue = `${percentage}%`;
  const classDiv = `progressBar progressBar--${useCase}`;
  return (
    <div className={classDiv}>
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
  useCase: PropTypes.string.isRequired,
};

// == Export
export default ProgressBar;
