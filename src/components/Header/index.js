// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import menuImage from 'src/assets/svg/interactives/menu.svg';
import closeMenuImage from 'src/assets/svg/interactives/closeMenu.svg';
import emptySquare from 'src/assets/svg/interactives/emptySquare.svg';
import { NavLink } from 'react-router-dom';

// == Composant
const Header = ({
  initials, onClickButtonMenu, isLoggedIn, open,
}) => {
  const handleOnClickMenu = () => {
    onClickButtonMenu();
  };

  return (
    <div className="header">
      <div className="header__menu">
        <button type="button" className="menu__button" onClick={handleOnClickMenu}>
          { open === true
            ? (
              <svg className="header__svgMenu" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M56.4829 0H40.625V4H56.625V20H60.625V4.14209L56.4829 0ZM0.625 20V4.42636L5.05136 0H20.625V4H4.625V20H0.625ZM0.625 55.8578L4.76718 60H20.625V56H4.625V40H0.625V55.8578ZM56.625 40V56H40.625V60H56.625H56.7671L56.9711 59.796L56.9751 59.8L60.5126 56.2626L60.5085 56.2585L60.625 56.1421V56V40H56.625ZM36.9684 20.8655L37.6852 21.5823L30.6348 28.6327L23.5745 21.5725L24.2816 20.8655L21.4531 18.037L18.6247 20.8655L21.4531 23.6939L22.1603 22.9867L29.2206 30.047L22.2073 37.0602L21.4531 36.3061L18.6247 39.1345L21.4531 41.9629L24.2816 39.1345L23.6215 38.4745L30.6348 31.4612L37.6383 38.4647L36.9684 39.1345L39.7969 41.9629L42.6253 39.1345L39.7969 36.3061L39.0525 37.0505L32.049 30.047L39.0995 22.9965L39.7969 23.6939L42.6253 20.8655L39.7969 18.037L36.9684 20.8655Z" fill="white" />
              </svg>
            )
            : (
              <embed className="header__svgMenu" src={menuImage} type="image/svg+xml" width="60" height="60" />
            )}
        </button>
      </div>
      <div className="header__profil">
        {
        !open && (
        <NavLink to="/settings" label="Settings">
          <embed className="header__svgSettings" src={emptySquare} type="image/svg+xml" width="60" height="60" />
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
