// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const CloseIcon = ({ onClickButtonMenu, useCase }) => {
  const onClick = () => {
    if (useCase === 'menu') {
      onClickButtonMenu();
    }
  };
  return (
    <button type="button" className="closeIcon closeIcon--topLeftDesktop" onClick={onClick}>
      <svg className="CloseIcon__svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.75 4.84619L56.1538 0.25H5.34619L0.75 4.84619V55.6538L5.34619 60.25H56.1538L60.75 55.6538V4.84619Z" fill="black" fillOpacity="0.85" />
        <path className="closeIcon__corners" fillRule="evenodd" clipRule="evenodd" d="M56.4829 0H40.625V4H56.625V20H60.625V4.14209L56.4829 0ZM0.625 20V4.42636L5.05136 0H20.625V4H4.625V20H0.625ZM0.625 55.8578L4.76718 60H20.625V56H4.625V40H0.625V55.8578ZM56.625 40V56H40.625V60H56.625H56.7671L60.625 56.1421V56V40H56.625Z" fill="white" />
        <g className="closeIcon__rotateHover">
          <path className="closeIcon__mainStrokes" d="M39.2933 19.9746L40.7075 21.3888L21.4887 40.6076L20.0745 39.1934L39.2933 19.9746Z" fill="white" />
          <path className="closeIcon__mainStrokes" d="M20.8498 21.6759L22.264 20.2617L40.4671 38.4648L39.0529 39.879L20.8498 21.6759Z" fill="white" />
          <path d="M21.4534 18.0371L24.2819 20.8655L21.4534 23.694L18.625 20.8655L21.4534 18.0371Z" fill="white" />
          <path d="M21.4534 36.3062L24.2819 39.1346L21.4534 41.963L18.625 39.1346L21.4534 36.3062Z" fill="white" />
          <path d="M39.7972 18.0371L42.6256 20.8655L39.7972 23.694L36.9688 20.8655L39.7972 18.0371Z" fill="white" />
          <path d="M39.7972 36.3062L42.6256 39.1346L39.7972 41.963L36.9688 39.1346L39.7972 36.3062Z" fill="white" />
        </g>
      </svg>
    </button>
  );
};

CloseIcon.propTypes = {
  onClickButtonMenu: PropTypes.func.isRequired,
  useCase: PropTypes.string.isRequired,
};

// == Export
export default CloseIcon;
