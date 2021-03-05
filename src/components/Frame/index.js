// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Frame = () => (
  <div className="frame">
    <div className="frame__corner--topLeft">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 20.5V5.09619L5.09619 0.5H20.5V4.5H4.5V20.5H0.5Z" fill="white" />
      </svg>
    </div>
    <svg className="frame__corner--topRight" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0.499999L15.9038 0.5L20.5 5.09619L20.5 20.5L16.5 20.5L16.5 4.5L0.5 4.5L0.5 0.499999Z" fill="white" />
    </svg>
    <svg className="frame__corner--bottomLeft" width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 20.75L5.09619 20.75L0.5 16.1538L0.499999 0.75L4.5 0.75L4.5 16.75L20.5 16.75L20.5 20.75Z" fill="white" />
    </svg>
    <svg className="frame__corner--bottomRight" width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 0.5L20.5 15.9038L15.9038 20.5L0.5 20.5L0.5 16.5L16.5 16.5L16.5 0.5L20.5 0.5Z" fill="white" />
    </svg>
  </div>
);

// == Export
export default Frame;
