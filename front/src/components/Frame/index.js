// == Import npm
import React from 'react';

// == Import
import './style.scss';
import corner from 'src/assets/svg/corner.svg';

// == Composant
const Frame = () => (
  <div className="frame">
    <div className="frame__corner--topRight">
      <embed src={corner} type="image/svg+xml" width="20" height="20" />
    </div>
    <div className="frame__corner--topLeft">
      <embed src={corner} type="image/svg+xml" width="20" height="20" />
    </div>
    <div className="frame__corner--bottomLeft">
      <embed src={corner} type="image/svg+xml" width="20" height="20" />
    </div>
    <div className="frame__corner--bottomRight">
      <embed src={corner} type="image/svg+xml" width="20" height="20" />
    </div>
  </div>
);

// == Export
export default Frame;
