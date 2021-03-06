import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';
import './animation.scss';

const LinkMenu = ({
  label,
  path,
  funcOnClick,
  className,
}) => {
  const classLink = `linkMenu linkMenu--${className}`;
  return (
    <NavLink
      to={path}
      exact
      onClick={funcOnClick}
    >
      <li className={classLink}>
        <p>{label}</p>
        <svg className="linkMenu__triangle" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
        </svg>
      </li>
    </NavLink>
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
