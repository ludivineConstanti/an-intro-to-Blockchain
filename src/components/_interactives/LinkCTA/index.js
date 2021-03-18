// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import './animation.scss';
import 'src/styles/activeState.scss';
import Icon from 'src/components/_statics/Icon';

// == Composant
const LinkCTA = ({
  quizId,
  categoryId,
  externalLink,
  label, path,
  score,
  done,
}) => {
  const content = (
    <div className="linkCTA">
      <div className="linkCTA__iconDiv">
        <Icon category={categoryId} quiz={quizId} score={score} done={done} />
        <svg className="linkCTA__iconDiv__frame" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10.5V5.09619L4.59619 0.5H10V4.5H4V10.5H0Z" fill="white" />
          <path d="M80 70.5L80 75.9038L75.4038 80.5L70 80.5L70 76.5L76 76.5L76 70.5L80 70.5Z" fill="white" />
          <path d="M10 80.5L4.59619 80.5L-2.00906e-07 75.9038L-4.37114e-07 70.5L4 70.5L4 76.5L10 76.5L10 80.5Z" fill="white" />
          <path d="M70 0.500001L75.4038 0.500001L80 5.09619L80 10.5L76 10.5L76 4.5L70 4.5L70 0.500001Z" fill="white" />
          <path className="linkCTA__iconDiv__borders" fillRule="evenodd" clipRule="evenodd" d="M5 0.500003V2.5L75 2.5V0.5L5 0.500003ZM2 5.5H0V75.5H2V5.5ZM5 78.5V80.5H75V78.5H5ZM78 5.5H80V75.5H78V5.5Z" fill="white" />
        </svg>
      </div>
      <div className="linkCTA__label">
        <p className="linkCTA__label__text">{label}</p>
        <svg className="linkCTA__triangle" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.800002 1.95744L10.4 7.5L0.800002 13.0426L0.800002 1.95744Z" stroke="white" />
        </svg>
      </div>
    </div>
  );

  return (
    <>
      {
      !externalLink
        ? <Link to={`/quiz/${quizId}`}>{content}</Link>
        : (
          <a href={path} rel="noreferrer nofollow noopener" target="_blank">
            {content}
          </a>
        )
      }
    </>
  );
};

LinkCTA.propTypes = {
  quizId: PropTypes.number.isRequired,
  categoryId: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  path: PropTypes.string,
  score: PropTypes.number,
  done: PropTypes.bool,
};

LinkCTA.defaultProps = {
  externalLink: false,
  path: '',
  score: 0,
  done: false,
};

// == Export
export default LinkCTA;
