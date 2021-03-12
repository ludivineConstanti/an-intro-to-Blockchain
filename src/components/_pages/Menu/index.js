import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './style.scss';
import LinkMenu from 'src/components/_interactives/LinkMenu';

const Menu = ({ onClickButtonMenu, isLoggedIn, handleLogout }) => {
  // checks if the language was updated
  const { t } = useTranslation();
  const handleOnClick = () => {
    onClickButtonMenu();
  };
  const handleOnLogout = (event) => {
    event.preventDefault();
    handleLogout();
    onClickButtonMenu();
  };
  return (
    <nav>
      {
      isLoggedIn === false
        ? (
          <ul className="menu">
            <LinkMenu path="/" label={t('menu.home')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label={t('menu.quizzes')} funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label={t('menu.articles')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/login" label={t('menu.login')} funcOnClick={handleOnClick} />
            <LinkMenu path="/register" label={t('menu.register')} funcOnClick={handleOnClick} className="margin2" />
          </ul>
        )
        : (
          <ul className="menu">
            <LinkMenu path="/" label={t('menu.home')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label={t('menu.quizzes')} funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label={t('menu.articles')} funcOnClick={handleOnClick} />
            <LinkMenu path="/achievements" label={t('menu.achievements')} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/settings" label={t('menu.settings')} funcOnClick={handleOnClick} />
            <LinkMenu path="/logout" label={t('menu.signOut')} funcOnClick={handleOnLogout} className="margin2" />
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
};

export default Menu;
