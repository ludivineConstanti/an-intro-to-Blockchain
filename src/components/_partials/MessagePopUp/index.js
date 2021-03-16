// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const MessagePopUp = ({
  label, text, path, useCase, onClickToLeavePopUp,
}) => {
  const showLinks = useCase === 'quizResult';

  return (
    <div className="messagePopUp">
      <div className="messagePopUp__frame">
        <h3 className="messagePopUp__textBig">{label}
          <span className="messagePopUp__textSmall">
            {text}
          </span>
        </h3>
        <div className="messagePopUp__links">
          <div className="messagePopUp__links__giveUp" onClick={onClickToLeavePopUp}>
            <LinkButton label="I don't care" path={path} onClick={onClickToLeavePopUp} />
          </div>
          <div className="messagePopUp__links__LogIn">
            <LinkButton label="Register" path="/quizResult/register" />
            <LinkButton label="Log in" path="/quizResult/login" />
          </div>
        </div>
      </div>
    </div>
  );
};

MessagePopUp.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  useCase: PropTypes.string.isRequired,
  onClickToLeavePopUp: PropTypes.func.isRequired,
  path: PropTypes.string,
};

MessagePopUp.defaultProps = {
  path: '/quizzes',
};

// == Export
export default MessagePopUp;
