import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';
import triangle from 'src/assets/svg/interactives/triangle.svg';

const LinksMenu = ({ label, path, funcOnClick }) => (
  <div className="menu__link">
    <NavLink
      to={path}
      exact
      onClick={funcOnClick}
    >{label}
      <div className="link__triangle">
        <embed className="triangle" src={triangle} type="image/svg+xml" width="48" height="48" />
      </div>
    </NavLink>
  </div>
);

LinksMenu.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  funcOnClick: PropTypes.func.isRequired,
};

export default LinksMenu;
