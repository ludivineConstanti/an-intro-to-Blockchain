// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './style.scss';
import './animation.scss';
import triggerAnimationBackground from 'src/middlewares/triggerAnimationBackground';

// == Composant
const ProfileIcon = ({ initials }) => (
  <div className="profileIcon profileIcon--topRightDesktop">
    <NavLink to="/settings" label="Settings" onClick={triggerAnimationBackground}>
      <span className="profileIcon__username">{initials}</span>
      <svg className="profileIcon__svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.75 4.84619L56.1538 0.25H5.34619L0.75 4.84619V55.6538L5.34619 60.25H56.1538L60.75 55.6538V4.84619Z" fill="black" fillOpacity="0.85" />
        <g className="profileIcon__corners">
          <path d="M55.6538 0H40.25V4H56.25V20H60.25V4.59619L55.6538 0Z" fill="white" />
          <path d="M0.25 20V4.59619L4.84619 0H20.25V4H4.25V20H0.25Z" fill="white" />
          <path d="M0.25 55.4038L4.84619 60H20.25V56H4.25V40H0.25V55.4038Z" fill="white" />
          <path d="M56.25 40V56H40.25V60H55.6538L60.25 55.4038V40H56.25Z" fill="white" />
        </g>
      </svg>
    </NavLink>
  </div>
);

ProfileIcon.propTypes = {
  initials: PropTypes.string,
};

ProfileIcon.defaultProps = {
  initials: '??',
};

// == Export
export default ProfileIcon;
