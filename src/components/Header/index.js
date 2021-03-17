// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';
import CloseIcon from 'src/containers/_interactives/_buttonsHeader/CloseIcon';
import MenuIcon from 'src/containers/_interactives/_buttonsHeader/MenuIcon';
import ProfileIcon from 'src/containers/_interactives/_buttonsHeader/ProfileIcon';

// == Composant
const Header = ({
  isLoggedIn,
  menuOpen,
  language,
  onClickLanguage,
  isPlaying,
}) => {
  const { t } = useTranslation();

  const classEnglish = language === 'en' ? 'header__language__english header__language--active' : 'header__language__english';
  const classFrench = language === 'fr' ? 'header__language__french header__language--active' : 'header__language__french';

  const nav = (
    <>
      { menuOpen ? <CloseIcon useCase="menu" /> : <MenuIcon />}
      { !menuOpen && isLoggedIn && <ProfileIcon /> }
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

Header.propTypes = {
  onClickLanguage: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  language: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

// == Export
export default Header;
