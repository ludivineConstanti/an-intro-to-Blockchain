import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';
import triangle from 'src/assets/svg/interactives/triangle.svg';

const LinkMenu = ({
  label,
  path,
  funcOnClick,
  className,
}) => {
  const classLink = `navLinkButton navLinkButton--${className}`;
  return (
    <div className={classLink}>
      <NavLink
        to={path}
        exact
        onClick={funcOnClick}
      >{label}
        <div className="link__triangle">
          <embed className="triangle" src={triangle} type="image/svg+xml" width="32" height="32" />
        </div>
      </NavLink>
    </div>
  );
};

LinkMenu.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  funcOnClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

LinkMenu.defaultProps = {
  className: 'margin1',
};

export default LinkMenu;
