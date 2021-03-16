// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import explanationScore from './explanationScore';

// == Composant
const AnswerQuestion = ({
  questionNumber,
  increaseQuestion,
  validateQuiz,
  calculateQuiz,
  isLoggedIn,
  questionData,
  currentQuizData,
  userQuizInfos,
  userAnswers,
  language,
}) => {
  // checks if the language was updated
  const { t } = useTranslation();

  const nextQuestion = () => {
    increaseQuestion();
  };

  const explanationMessage = explanationScore(questionNumber, questionData, userAnswers, language);

  const goSeeResults = () => {
    calculateQuiz(currentQuizData, userQuizInfos, userAnswers);
    if (isLoggedIn) validateQuiz();
  };
  return (
    <section className="answerQuestion">
      <TitleCategory
        label={explanationMessage.label}
        subtitle={explanationMessage.subtitle}
      />
      <p className={questionData.justification.length > 200
        ? 'answerQuestion__justification answerQuestion__justification--twoColumns'
        : 'answerQuestion__justification'}
      >
        {questionData.justification}
      </p>
      <div className="answerQuestion__links">
        <div className="answerQuestion__externalLink"><LinkButton label={t('quiz.linkExternalArticle')} path={questionData.articleLink} externalLink /></div>
        {currentQuizData.totalQuestions !== questionNumber
          ? <SubmitButton label={t('quiz.buttonNextQuestion')} onClick={nextQuestion} />
          : <div className="answerQuestion__results"><LinkButton label={t('quiz.linkResults')} path="/quizResult" onClickLink={goSeeResults} /></div>}
      </div>
    </section>
  );
};

AnswerQuestion.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  increaseQuestion: PropTypes.func.isRequired,
  validateQuiz: PropTypes.func.isRequired,
  calculateQuiz: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  questionData: PropTypes.object.isRequired,
  userAnswers: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  currentQuizData: PropTypes.object.isRequired,
  userQuizInfos: PropTypes.object.isRequired,
};

// == Export
export default AnswerQuestion;
