/* eslint-disable no-nested-ternary */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';
import triggerAnimationBackground from 'src/middlewares/triggerAnimationBackground';

// == Composant
const LinkButton = ({
  label,
  path,
  className,
  onClickLink,
  externalLink,
  fakeLink,
}) => {
  const classDiv = `linkButton linkButton--${className}`;
  const classTriangle = `linkButton__triangle linkButton__triangle--${className}`;

  const content = (
    <div className={classDiv} onClick={onClickLink}>
      {label}
      <div className={classTriangle}>
        <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
        </svg>
      </div>
    </div>
  );
  let linkType = (
    <Link to={path}>{content}
    </Link>
  );
  if (externalLink) {
    linkType = (
      <a href={path} rel="noreferrer nofollow noopener" target="_blank">
        {content}
      </a>
    );
  }
  // eslint-disable-next-line no-unused-expressions
  // ternary expression with 3 different options instead of 2
  return (
    <>
      {
        !fakeLink ? (<>{ linkType }</>) : (<>{ content }</>)
      }
    </>
  );
};

LinkButton.defaultProps = {
  className: 'size1',
  path: '',
  onClickLink: () => triggerAnimationBackground(),
  externalLink: false,
  fakeLink: false,
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  className: PropTypes.string,
  onClickLink: PropTypes.func,
  externalLink: PropTypes.bool,
  fakeLink: PropTypes.bool,
};

// == Export
export default LinkButton;
