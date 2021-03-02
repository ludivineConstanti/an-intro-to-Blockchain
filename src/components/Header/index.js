// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import menuImage from 'src/assets/svg/interactives/menu.svg';
import emptySquare from 'src/assets/svg/interactives/emptySquare.svg';

// == Composant
const Header = ({ initials, onClickButton }) => {
  const handleOnClick = () => {
    onClickButton();
    console.log('yo');
  };

  return (
    <div className="header">
      <div className="header__menu">
        <button type="button" className="menu__button" onClick={handleOnClick}>
          <embed className="svg" src={menuImage} type="image/svg+xml" width="60" height="60" />
        </button>
      </div>
      <div>
        <embed src={emptySquare} type="image/svg+xml" width="60" height="60" />
        <span className="header__username">{initials}</span>
      </div>
    </div>
  );
};

Header.defaultProps = {
  initials: '??',
};

Header.propTypes = {
  initials: PropTypes.string,
  onClickButton: PropTypes.func.isRequired,
};

// == Export
export default Header;
