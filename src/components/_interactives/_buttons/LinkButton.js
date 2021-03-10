// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';

// == Composant
const LinkButton = ({
  label,
  path,
  className,
  onClickLink,
  externalLink,
}) => {
  const classDiv = `linkButton linkButton--${className}`;
  const classTriangle = `linkButton__triangle linkButton__triangle--${className}`;
  // eslint-disable-next-line no-unused-expressions
  return (
    <>
      {
        !externalLink
          ? (
            <Link
              to={path}
              onClick={onClickLink}
            >
              <div className={classDiv}>
                {label}
                <div className={classTriangle}>
                  <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
                  </svg>
                </div>
              </div>
            </Link>
          )
          : (
            <a href={path} rel="noreferrer nofollow noopener" target="_blank">
              <div className={classDiv}>
                {label}
                <div className={classTriangle}>
                  <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
                  </svg>
                </div>
              </div>
            </a>
          )
      }
    </>
  );
};

LinkButton.defaultProps = {
  className: 'size1',
  path: '',
  onClickLink: () => {},
  externalLink: false,
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  className: PropTypes.string,
  onClickLink: PropTypes.func,
  externalLink: PropTypes.bool,
};

// == Export
export default LinkButton;
