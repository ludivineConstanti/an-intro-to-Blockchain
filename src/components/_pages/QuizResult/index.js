// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const QuizResult = ({ score }) => {
  // checks if the language was updated
  const { t } = useTranslation();
  const chooseMessage = Math.floor(score / 100 * 4);
  return (
    <div className="quizResult">
      <h1 className="quizResult__title">
        <span className="quizResult__titlePart1">{score} %
          <span className="quizResult__subtitle"> {t('quizResult.textScore')} </span>
        </span>
        <span className="quizResult__titlePart2">{t(`quizResult.messageScore.${chooseMessage}`)}</span>
      </h1>
      <div className="quizResult__redirectLink1">
        <LinkButton label={t('quizResult.linkArticles')} path="/articles" />
      </div>
      <div className="quizResult__redirectLink2">
        <LinkButton label={t('quizResult.linkQuizzes')} path="/quizzes" />
      </div>
    </div>
  );
};

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
};

// == Export
export default QuizResult;
