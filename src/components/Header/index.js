// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Header = ({
  initials, onClickButtonMenu, onClickLanguage, isLoggedIn, menuOpen, language,
}) => {
  const handleOnClickMenu = () => {
    onClickButtonMenu();
  };

  const classEnglish = language === 'en' ? 'header__language__english header__language--active' : 'header__language__english';
  const classFrench = language === 'fr' ? 'header__language__french header__language--active' : 'header__language__french';

  return (

    <span className="header">
      <div className="header__blackbox header__blackbox--top" />
      {!menuOpen && <div className="header__language"><button className={classEnglish} onClick={onClickLanguage} value="en">English</button> | <button className={classFrench} onClick={onClickLanguage} value="fr">French</button></div>}
      <button type="button" className="header__buttonTL" onClick={handleOnClickMenu}>
        { menuOpen === true
          ? (
            <svg className="header__svgTL" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.75 4.84619L56.1538 0.25H5.34619L0.75 4.84619V55.6538L5.34619 60.25H56.1538L60.75 55.6538V4.84619Z" fill="black" fillOpacity="0.85" />
              <path className="header__corners" fillRule="evenodd" clipRule="evenodd" d="M56.4829 0H40.625V4H56.625V20H60.625V4.14209L56.4829 0ZM0.625 20V4.42636L5.05136 0H20.625V4H4.625V20H0.625ZM0.625 55.8578L4.76718 60H20.625V56H4.625V40H0.625V55.8578ZM56.625 40V56H40.625V60H56.625H56.7671L60.625 56.1421V56V40H56.625Z" fill="white" />
              <g className="header__rotateHover">
                <path className="header__mainStrokes" d="M39.2933 19.9746L40.7075 21.3888L21.4887 40.6076L20.0745 39.1934L39.2933 19.9746Z" fill="white" />
                <path className="header__mainStrokes" d="M20.8498 21.6759L22.264 20.2617L40.4671 38.4648L39.0529 39.879L20.8498 21.6759Z" fill="white" />
                <path d="M21.4534 18.0371L24.2819 20.8655L21.4534 23.694L18.625 20.8655L21.4534 18.0371Z" fill="white" />
                <path d="M21.4534 36.3062L24.2819 39.1346L21.4534 41.963L18.625 39.1346L21.4534 36.3062Z" fill="white" />
                <path d="M39.7972 18.0371L42.6256 20.8655L39.7972 23.694L36.9688 20.8655L39.7972 18.0371Z" fill="white" />
                <path d="M39.7972 36.3062L42.6256 39.1346L39.7972 41.963L36.9688 39.1346L39.7972 36.3062Z" fill="white" />
              </g>
            </svg>
          )
          : (
            <svg className="header__svgTL" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.75 4.84619L56.1538 0.25H5.34619L0.75 4.84619V55.6538L5.34619 60.25H56.1538L60.75 55.6538V4.84619Z" fill="black" fillOpacity="0.85" />
              <path d="M19.5794 27.4214L21.408 29.25L40.093 29.25L41.9216 27.4214L44.75 30.2498L41.9216 33.0782L40.0933 31.25L21.4076 31.25L19.5794 33.0782L16.751 30.2498L19.5794 27.4214Z" fill="white" />
              <path d="M25.4222 16.25L27.3174 18.1452H34.1832L36.0784 16.25L38.9069 19.0784L36.0784 21.9069L34.2502 20.0786H27.2504L25.4222 21.9069L22.5938 19.0784L25.4222 16.25Z" fill="white" />
              <path d="M25.4222 38.5933L27.3174 40.4885H34.1832L36.0784 38.5933L38.9069 41.4217L36.0784 44.2501L34.2502 42.4219H27.2504L25.4222 44.2501L22.5938 41.4217L25.4222 38.5933Z" fill="white" />
              <g className="header__corners">
                <path d="M56.1538 0.25H40.75V4.25H56.75V20.25H60.75V4.84619L56.1538 0.25Z" fill="white" />
                <path d="M0.75 20.25V4.84619L5.34619 0.25H20.75V4.25H4.75V20.25H0.75Z" fill="white" />
                <path d="M0.75 55.6538L5.34619 60.25H20.75V56.25H4.75V40.25H0.75V55.6538Z" fill="white" />
                <path d="M56.75 40.25V56.25H40.75V60.25H56.1538L60.75 55.6538V40.25H56.75Z" fill="white" />
              </g>
            </svg>
          )}
      </button>
      <div className="header__buttonTR">
        {
        !menuOpen && (
        <NavLink to={isLoggedIn ? '/settings' : '/login'} label="Settings">
          <span className="header__username">{initials}</span>
          <svg className="header__svgTR" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.75 4.84619L56.1538 0.25H5.34619L0.75 4.84619V55.6538L5.34619 60.25H56.1538L60.75 55.6538V4.84619Z" fill="black" fillOpacity="0.85" />
            <g className="header__corners">
              <path d="M55.6538 0H40.25V4H56.25V20H60.25V4.59619L55.6538 0Z" fill="white" />
              <path d="M0.25 20V4.59619L4.84619 0H20.25V4H4.25V20H0.25Z" fill="white" />
              <path d="M0.25 55.4038L4.84619 60H20.25V56H4.25V40H0.25V55.4038Z" fill="white" />
              <path d="M56.25 40V56H40.25V60H55.6538L60.25 55.4038V40H56.25Z" fill="white" />
            </g>
          </svg>
        </NavLink>
        )
        }
      </div>

      <div className="header__blackbox header__blackbox--bottom" />
    </span>
  );
};

Header.defaultProps = {
  initials: '??',
  language: 'en',
};

Header.propTypes = {
  initials: PropTypes.string,
  onClickButtonMenu: PropTypes.func.isRequired,
  onClickLanguage: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  language: PropTypes.string,
};

// == Export
export default Header;
