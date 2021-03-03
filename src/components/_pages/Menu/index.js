import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import LinkMenu from 'src/components/_interactives/LinkMenu';

const Menu = ({ onClickButtonMenu }) => {
  const handleOnClick = () => {
    onClickButtonMenu();
  };
  return (
    <div className="menu">
      <LinkMenu path="/" label="Home" funcOnClick={handleOnClick} className="margin2" />
      <LinkMenu path="/quizzes" label="Quizzes" funcOnClick={handleOnClick} />
      <LinkMenu path="/articles" label="Articles" funcOnClick={handleOnClick} />
      <LinkMenu path="/profile/scores" label="Achievements" funcOnClick={handleOnClick} className="margin2" />
      <LinkMenu path="/settings" label="Settings" funcOnClick={handleOnClick} />
      <LinkMenu path="/" label="Log Out" funcOnClick={handleOnClick} className="margin2" />
    </div>
  );
};

Menu.propTypes = {
  onClickButtonMenu: PropTypes.func.isRequired,
};

export default Menu;
