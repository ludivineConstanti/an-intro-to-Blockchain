import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import LinksMenu from 'src/components/_interactives/LinksMenu';

const Menu = ({ onClickButtonMenu }) => {
  const handleOnClick = () => {
    onClickButtonMenu();
  };
  return (
    <div className="menu">
      <LinksMenu path="/" label="Home" funcOnClick={handleOnClick} />
      <LinksMenu path="/quizzes" label="Quizzes" funcOnClick={handleOnClick} />
      <LinksMenu path="/articles" label="Articles" funcOnClick={handleOnClick} />
      <LinksMenu path="/profile/scores" label="Achievements" funcOnClick={handleOnClick} />
      <LinksMenu path="/settings" label="Settings" funcOnClick={handleOnClick} />
      <LinksMenu path="/" label="Log Out" funcOnClick={handleOnClick} />
    </div>
  );
};

Menu.propTypes = {
  onClickButtonMenu: PropTypes.func.isRequired,
};

export default Menu;
