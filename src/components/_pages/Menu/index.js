import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { NavLink } from 'react-router-dom';

const Menu = ({ onClickButton }) => {
  const handleOnClick = () => {
    onClickButton();
    console.log('yo');
  };
  return (
    <div className="menu">
      <NavLink onClick={handleOnClick} exact to="/">Home</NavLink>
      <NavLink onClick={handleOnClick} exact to="/quizzes">Quizzes</NavLink>
      <NavLink onClick={handleOnClick} exact to="/articles">Articles</NavLink>
      <NavLink onClick={handleOnClick} exact to="/profile/scores">Achievements</NavLink>
      <NavLink onClick={handleOnClick} exact to="/profile">Settings</NavLink>
      <NavLink onClick={handleOnClick} exact to="/">Log out</NavLink>
    </div>
  );
};
Menu.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default Menu;
