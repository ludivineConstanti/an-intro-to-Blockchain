// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const MessagePopUp = ({
  label, text, path, useCase, onClickToLeavePopUp,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  const rightPart = useCase === 'registerScore'
    ? (
      <>
        <LinkButton label={t('menu.register')} path="/quizResult/register" />
        <LinkButton label={t('menu.login')} path="/quizResult/login" />
      </>
    ) : (<LinkButton label={t('quiz.popUp.linkGoBack')} />);

  return (
    <div className="messagePopUp">
      <div className="messagePopUp__frame">
        <h3 className="messagePopUp__textBig">{label}
          <span className="messagePopUp__textSmall">
            {text}
          </span>
        </h3>
        <div className="messagePopUp__links">
          <div className="messagePopUp__links__left" onClick={onClickToLeavePopUp}>
            <LinkButton label={t('quiz.popUp.linkGiveUp')} path={path} onClick={onClickToLeavePopUp} />
          </div>
          <div className="messagePopUp__links__right">
            {rightPart}
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
