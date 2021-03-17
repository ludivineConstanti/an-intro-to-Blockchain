// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import MessagePopUp from 'src/containers/_partials/MessagePopUp';
import CloseIcon from 'src/containers/_interactives/_buttonsHeader/CloseIcon';

// == Composant
const QuizResult = ({ score, isLoggedIn, showPopUp }) => {
  // checks if the language was updated
  const { t } = useTranslation();
  const chooseMessage = Math.floor(score / 100 * 4);

  let pathPopUp = '';

  const linksBottom = isLoggedIn
    ? (
      <>
        <div className="quizResult__redirectLink1">
          <LinkButton label={t('quizResult.linkArticles')} path="/articles" />
        </div>
        <div className="quizResult__redirectLink2">
          <LinkButton label={t('quizResult.linkQuizzes')} path="/quizzes" />
        </div>
      </>
    ) : (
      <>
        <div
          className="quizResult__redirectLink1"
          onClick={() => {
            pathPopUp = '/articles';
          }}
        >
          <LinkButton label={t('quizResult.linkArticles')} fakeLink />
        </div>
        <div
          className="quizResult__redirectLink2"
          onClick={() => {
            pathPopUp = '/quizzes';
          }}
        >
          <LinkButton label={t('quizResult.linkQuizzes')} fakeLink />
        </div>
      </>
    );
  return (
    <>
      <CloseIcon useCase="showPopUp" />
      {showPopUp && <MessagePopUp label={t('quizResult.popUp.label')} text={t('quizResult.popUp.text')} useCase="registerScore" path={pathPopUp} />}
      <div className="quizResult">
        <h1 className="quizResult__title">
          <span className="quizResult__titlePart1">{score} %
            <span className="quizResult__subtitle"> {t('quizResult.textScore')} </span>
          </span>
          <span className="quizResult__titlePart2">{t(`quizResult.messageScore.${chooseMessage}`)}</span>
        </h1>
        {linksBottom}
      </div>
    </>
  );
};

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  showPopUp: PropTypes.bool.isRequired,
};

// == Export
export default QuizResult;
