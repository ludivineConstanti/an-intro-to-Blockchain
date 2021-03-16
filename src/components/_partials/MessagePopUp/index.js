// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const MessagePopUp = ({ path }) => (
  <div className="messagePopUp">
    <h3 className="messagePopUp__textBig">Oh, no!
      <span className="messagePopUp__textSmall">
        You won't be able to save your score, if you leave this page
      </span>
    </h3>
    <div className="messagePopUp__links">
      <div className="messagePopUp__links__giveUp">
        <LinkButton label="I don't care" path={path} />
      </div>
      <div className="messagePopUp__links__LogIn">
        <LinkButton label="Register" path="/quizResult/register" />
        <LinkButton label="Log in" path="/quizResult/logIn" />
      </div>
    </div>
  </div>
);

MessagePopUp.propTypes = {
  path: PropTypes.string.isRequired,
};

// == Export
export default MessagePopUp;
