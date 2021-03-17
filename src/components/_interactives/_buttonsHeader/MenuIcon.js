// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const MenuIcon = ({ onClickButtonMenu }) => (
  <button type="button" className="menuIcon menuIcon--topLeftDesktop" onClick={onClickButtonMenu}>
    <svg className="menuIcon__svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.75 4.84619L56.1538 0.25H5.34619L0.75 4.84619V55.6538L5.34619 60.25H56.1538L60.75 55.6538V4.84619Z" fill="black" fillOpacity="0.85" />
      <path d="M19.5794 27.4214L21.408 29.25L40.093 29.25L41.9216 27.4214L44.75 30.2498L41.9216 33.0782L40.0933 31.25L21.4076 31.25L19.5794 33.0782L16.751 30.2498L19.5794 27.4214Z" fill="white" />
      <path d="M25.4222 16.25L27.3174 18.1452H34.1832L36.0784 16.25L38.9069 19.0784L36.0784 21.9069L34.2502 20.0786H27.2504L25.4222 21.9069L22.5938 19.0784L25.4222 16.25Z" fill="white" />
      <path d="M25.4222 38.5933L27.3174 40.4885H34.1832L36.0784 38.5933L38.9069 41.4217L36.0784 44.2501L34.2502 42.4219H27.2504L25.4222 44.2501L22.5938 41.4217L25.4222 38.5933Z" fill="white" />
      <g className="menuIcon__corners">
        <path d="M56.1538 0.25H40.75V4.25H56.75V20.25H60.75V4.84619L56.1538 0.25Z" fill="white" />
        <path d="M0.75 20.25V4.84619L5.34619 0.25H20.75V4.25H4.75V20.25H0.75Z" fill="white" />
        <path d="M0.75 55.6538L5.34619 60.25H20.75V56.25H4.75V40.25H0.75V55.6538Z" fill="white" />
        <path d="M56.75 40.25V56.25H40.75V60.25H56.1538L60.75 55.6538V40.25H56.75Z" fill="white" />
      </g>
    </svg>
  </button>
);

MenuIcon.propTypes = {
  onClickButtonMenu: PropTypes.func.isRequired,
};

// == Export
export default MenuIcon;
