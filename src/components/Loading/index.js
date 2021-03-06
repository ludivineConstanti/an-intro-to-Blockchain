// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const Loading = ({ isLoading }) => {
  const arrayTroll = ['Connecting to the blockchain...', 'Calculating the angles of a square...', 'Counting the blocks...', 'Woops, a squirrel', 'Downloading the internet...', 'Putting clouds in the sky...', 'Thank you for your patience', 'Checking the price of Bitcoin...', "Hope you're having a good day"];
  const [message, setMessage] = useState(arrayTroll[Math.floor(Math.random() * arrayTroll.length)]);
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(() => arrayTroll[Math.floor(Math.random() * arrayTroll.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading">
      <div className="loading__svgContainer">
        <svg className="loading__svg" width="56" height="63" viewBox="0 0 56 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="loading__strokes" d="M1.09017 47.874L1.06859 14.6541L27.96 1.27539M1.09017 47.874L27.96 61.3316L54.6888 47.969M1.09017 47.874L27.96 31.2929M1.09017 47.874L1.05859 14.6479L27.96 1.27539M1.09017 47.874L27.96 61.3428L54.6888 47.969M54.6888 47.969L27.96 31.2929M54.6888 47.969L54.7477 14.6541L27.96 1.27539M54.6888 47.969L54.7577 14.6479L27.96 1.27539M27.96 31.2929V1.27539" stroke="white" strokeWidth="2" />
          <path className="loading__transparentPart loading__transparentPart--TR" d="M27.96 31.2929L1.09017 47.874L1.05859 14.6479L27.96 1.27539V31.2929Z" fill="white" />
          <path className="loading__transparentPart loading__transparentPart--TL" d="M54.6887 47.969L27.96 31.2929V1.27539L54.7576 14.6479L54.6887 47.969Z" fill="white" />
          <path className="loading__transparentPart loading__transparentPart--B" d="M27.9792 31.293L54.708 47.969L27.9792 61.3429L1.10938 47.8741L27.9792 31.293Z" fill="white" />
        </svg>
      </div>
      <p className="loading__comment">{message}</p>
    </div>
  );
};

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

// == Export
export default Loading;
