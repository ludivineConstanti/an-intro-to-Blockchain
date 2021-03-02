// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import menu from 'src/assets/svg/interactives/menu.svg';
import emptySquare from 'src/assets/svg/interactives/emptySquare.svg';

// == Composant
const Header = ({ initials }) => (
  <div className="header">
    <div>
      <embed src={menu} type="image/svg+xml" width="60" height="60" />
    </div>
    <div>
      <embed src={emptySquare} type="image/svg+xml" width="60" height="60" />
      <span className="header__username">{initials}</span>
    </div>
  </div>
);

Header.defaultProps = {
  initials: '??',
};

Header.propTypes = {
  initials: PropTypes.string,
};

// == Export
export default Header;
