// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';

// == Composant
const MessagePopUp = ({
  label, text, path, useCase, onClickToLeavePopUp, onClickToClosePopUp,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  const rightPart = useCase === 'registerScore'
    ? (
      <div className="messagePopUp__links__right">
        <LinkButton label={t('menu.register')} path="/quizResult/register" useCase="closePopUp" onClickLink={onClickToClosePopUp} />
        <LinkButton label={t('menu.login')} path="/quizResult/login" useCase="closePopUp" onClickLink={onClickToClosePopUp} />
      </div>
    ) : (
      <div className="messagePopUp__button__right">
        <SubmitButton label={t('quiz.popUp.linkGoBack')} onClick={onClickToClosePopUp} />
      </div>
    );

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
            <LinkButton label={t('quiz.popUp.linkGiveUp')} path={path} onClick={onClickToLeavePopUp} className="paddingTop" />
          </div>
          {rightPart}
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
  onClickToClosePopUp: PropTypes.func.isRequired,
  path: PropTypes.string,
};

MessagePopUp.defaultProps = {
  path: '/quizzes',
};

// == Export
export default MessagePopUp;
