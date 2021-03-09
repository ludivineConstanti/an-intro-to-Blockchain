import React from 'react';
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';

import './style.scss';
import LinkMenu from 'src/components/_interactives/LinkMenu';

const Menu = ({ onClickButtonMenu, isLoggedIn, handleLogout }) => {
  const { t, i18n } = useTranslation();
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
            <LinkMenu path="/" label={<Trans i18nKey="menu.home" />} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label={<Trans i18nKey="menu.quizzes" />} funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label={<Trans i18nKey="menu.articles" />} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/login" label={<Trans i18nKey="menu.login" />} funcOnClick={handleOnClick} />
            <LinkMenu path="/register" label={<Trans i18nKey="menu.register" />} funcOnClick={handleOnClick} className="margin2" />
          </ul>
        )
        : (
          <ul className="menu">
            <LinkMenu path="/" label={<Trans i18nKey="menu.home" />} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label={<Trans i18nKey="menu.quizzes" />} funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label={<Trans i18nKey="menu.articles" />} funcOnClick={handleOnClick} />
            <LinkMenu path="/profile/scores" label={<Trans i18nKey="menu.achievements" />} funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/settings" label={<Trans i18nKey="menu.settings" />} funcOnClick={handleOnClick} />
            <LinkMenu path="/logout" label={<Trans i18nKey="menu.signOut" />} funcOnClick={handleOnLogout} className="margin2" />
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
