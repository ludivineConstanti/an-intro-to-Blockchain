// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const ProgressBar = () => (
  <div className="progressBar">
    <p className="progressBar__text">0%</p>
    <div className="progressBar__bar">
      <div className="progressBar__bar__border" />
      <div className="progressBar__bar__center" />
      <div className="progressBar__bar__progression" />
      <div className="progressBar__bar__border" />
    </div>
  </div>
);

// == Export
export default ProgressBar;
