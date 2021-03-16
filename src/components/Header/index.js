// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';
import { NavLink } from 'react-router-dom';
import triggerAnimationBackground from 'src/middlewares/triggerAnimationBackground';
import CloseIcon from 'src/containers/_interactives/_buttonsHeader/CloseIcon';
import MenuIcon from 'src/containers/_interactives/_buttonsHeader/MenuIcon';

// == Composant
const Header = ({
  initials,
  isLoggedIn,
  menuOpen,
  language,
  onClickLanguage,
  isPlaying,
}) => {
  const { t } = useTranslation();

  const classEnglish = language === 'en' ? 'header__language__english header__language--active' : 'header__language__english';
  const classFrench = language === 'fr' ? 'header__language__french header__language--active' : 'header__language__french';

  const profileIcon = (
    <NavLink to="/settings" label="Settings" onClick={triggerAnimationBackground}>
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
  );

  const nav = (
    <>
      { menuOpen === true ? <CloseIcon useCase="menu" />
        : <MenuIcon />}
      <div className="header__buttonTR">
        { !menuOpen && isLoggedIn && <>{ profileIcon }</> }
      </div>
    </>
  );

  return (
    <>
      {!menuOpen && (
      <div className="header__language">
        <button className={classEnglish} onClick={onClickLanguage} value="en" type="button">
          {t('header.english')}
        </button>
        |
        <button className={classFrench} onClick={onClickLanguage} value="fr" type="button">
          {t('header.french')}
        </button>
      </div>
      )}
      <span className="header">
        <div className="header__blackbox header__blackbox--top" />
        { !isPlaying && <>{nav}</>}
        <div className="header__blackbox header__blackbox--bottom" />
      </span>
    </>
  );
};

Header.defaultProps = {
  initials: '??',
  language: 'en',
};

Header.propTypes = {
  initials: PropTypes.string,
  onClickLanguage: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  language: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
};

// == Export
export default Header;
