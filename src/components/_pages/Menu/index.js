import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import LinkMenu from 'src/components/_interactives/LinkMenu';

const Menu = ({ onClickButtonMenu, isLoggedIn }) => {
  const handleOnClick = () => {
    onClickButtonMenu();
  };
  return (
    <>
      {
      isLoggedIn === false
        ? (
          <div className="menu">
            <LinkMenu path="/" label="Home" funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/quizzes" label="Quizzes" funcOnClick={handleOnClick} />
            <LinkMenu path="/articles" label="Articles" funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/login" label="Login" funcOnClick={handleOnClick} />
            <LinkMenu path="/register" label="Register" funcOnClick={handleOnClick} />
          </div>
        )
        : (
          <div className="menu">
            <LinkMenu path="/" label="Home" funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/articles" label="Articles" funcOnClick={handleOnClick} />
            <LinkMenu path="/quizzes" label="Quizzes" funcOnClick={handleOnClick} />
            <LinkMenu path="/profile/scores" label="Achievements" funcOnClick={handleOnClick} className="margin2" />
            <LinkMenu path="/settings" label="Settings" funcOnClick={handleOnClick} />
            <LinkMenu path="/" label="Sign Out" funcOnClick={handleOnClick} className="margin2" />
          </div>
        )
    }
      <div className="menu__border" />
    </>
  );
};

Menu.propTypes = {
  onClickButtonMenu: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Menu;
