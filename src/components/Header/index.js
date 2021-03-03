// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import menuImage from 'src/assets/svg/interactives/menu.svg';
import closeMenuImage from 'src/assets/svg/closeMenu.svg';
import emptySquare from 'src/assets/svg/interactives/emptySquare.svg';
import { NavLink } from 'react-router-dom';

// == Composant
const Header = ({ initials, onClickButtonMenu, isLoggedIn, open }) => {
  const handleOnClickMenu = () => {
    onClickButtonMenu();
  };

  return (
    <div className="header">
      <div className="header__menu">
        <button type="button" className="menu__button" onClick={handleOnClickMenu}>
          { open === true
            ? (
              <embed className="svg" src={closeMenuImage} type="image/svg+xml" width="60" height="60" />
            )
            : (
              <embed className="svg" src={menuImage} type="image/svg+xml" width="60" height="60" />
            )}
        </button>
      </div>
      <div className="header__profil">
        {
        isLoggedIn === true
          ? (
            <NavLink to="/profile" label="Profile">
              <embed className="svg" src={emptySquare} type="image/svg+xml" width="60" height="60" />
              <span className="header__username">{initials}</span>
            </NavLink>
          )
          : (
            <NavLink to="/register" label="Profile">
              <embed className="svg" src={emptySquare} type="image/svg+xml" width="60" height="60" />
              <span className="header__username">{initials}</span>
            </NavLink>
          )
        }
      </div>
    </div>
  );
};

Header.defaultProps = {
  initials: '??',
};

Header.propTypes = {
  initials: PropTypes.string,
  onClickButtonMenu: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
};

// == Export
export default Header;
