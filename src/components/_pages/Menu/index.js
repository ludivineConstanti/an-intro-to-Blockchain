import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './style.scss';
import LinkMenu from 'src/components/_interactives/LinkMenu';
import triggerAnimationBackground from 'src/middlewares/triggerAnimationBackground';

const Menu = ({
  onClickButtonMenu, isLoggedIn, handleLogout, language, onClickLanguage,
}) => {
  // checks if the language was updated
  const { t } = useTranslation();
  const handleOnClick = () => {
    onClickButtonMenu();
    triggerAnimationBackground();
  };
  const handleOnLogout = (event) => {
    event.preventDefault();
    handleLogout();
    onClickButtonMenu();
  };

  const classEnglish = language === 'en' ? 'menu__language__english menu__language--active' : 'menu__language__english';
  const classFrench = language === 'fr' ? 'menu__language__french menu__language--active' : 'menu__language__french';

  const switchLanguage = (
    <div className="menu__language">
      <button className={classEnglish} onClick={onClickLanguage} value="en" type="button">
        {t('header.english')}
      </button>
      |
      <button className={classFrench} onClick={onClickLanguage} value="fr" type="button">
        {t('header.french')}
      </button>
    </div>
  );

  return (
    <nav>
      {
      isLoggedIn === false
        ? (
          <ul className="menu">
            {switchLanguage}
            <LinkMenu path="/" label={t('menu.home')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label={t('menu.quizzes')} funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label={t('menu.articles')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/login" label={t('menu.login')} funcOnClick={handleOnClick} />
            <LinkMenu path="/register" label={t('menu.register')} funcOnClick={handleOnClick} className="margin2" classModifier="lastLink" />
          </ul>
        )
        : (
          <ul className="menu">
            {switchLanguage}
            <LinkMenu path="/" label={t('menu.home')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label={t('menu.quizzes')} funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label={t('menu.articles')} funcOnClick={handleOnClick} />
            <LinkMenu path="/achievements" label={t('menu.achievements')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/settings" label={t('menu.settings')} funcOnClick={handleOnClick} />
            <LinkMenu path="/logout" label={t('menu.signOut')} funcOnClick={handleOnLogout} className="margin2" classModifier="lastLink" />
          </ul>
        )
    }
      <div className="menu__border" />
    </nav>
  );
};

Menu.propTypes = {
  onClickButtonMenu: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  onClickLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Menu;
