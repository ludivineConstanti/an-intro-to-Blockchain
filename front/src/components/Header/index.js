// == Import npm
import React from 'react';

// == Import
import './style.scss';
import menu from 'src/assets/svg/interactives/menu.svg';
import emptySquare from 'src/assets/svg/interactives/emptySquare.svg';

// == Composant
const Header = () => (
  <div className="header">
    <div>
      <embed src={menu} type="image/svg+xml" width="60" height="60" />
    </div>
    <div>
      <embed src={emptySquare} type="image/svg+xml" width="60" height="60" />
      <span className="header__username">??</span>
    </div>
  </div>
);

// == Export
export default Header;
