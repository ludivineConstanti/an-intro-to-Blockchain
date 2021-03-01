import React from 'react';
import './style.scss';

const Menu = () => (
  <div className="menu">
    <a href="/">Home</a>
    <a href="/quiz/home">Quizzes</a>
    <a href="/articles">Articles</a>
    <a href="/profile/scores">Achievements</a>
    <a href="/profile">Settings</a>
    <a href="/">Log out</a>
  </div>
);

export default Menu;
