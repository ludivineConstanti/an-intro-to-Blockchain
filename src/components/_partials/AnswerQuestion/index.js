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
  totalNum,
  questionNumber,
  justification,
  articleLink,
  increaseQuestion,
  validateQuiz,
  questionData,
  userAnswer,
  language,
}) => {
  // checks if the language was updated
  const { t } = useTranslation();

  const nextQuestion = () => {
    increaseQuestion(questionNumber + 1);
  };

  const explanationMessage = explanationScore(questionNumber, questionData, userAnswer, language);

  return (
    <section className="answerQuestion">
      <TitleCategory
        label={explanationMessage.label}
        subtitle={explanationMessage.subtitle}
      />
      <p className={justification.length > 200
        ? 'answerQuestion__justification answerQuestion__justification--twoColumns'
        : 'answerQuestion__justification'}
      >
        {justification}
      </p>
      <div className="answerQuestion__links">
        <div className="answerQuestion__externalLink"><LinkButton label={t('quiz.linkExternalArticle')} path={articleLink} externalLink /></div>
        {totalNum !== questionNumber
          ? <SubmitButton label={t('quiz.buttonNextQuestion')} onClick={nextQuestion} />
          : <div className="answerQuestion__results"><LinkButton label={t('quiz.linResults')} path="/quizResult" onClickLink={validateQuiz} /></div>}
      </div>
    </section>
  );
};

AnswerQuestion.propTypes = {
  totalNum: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
  justification: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  increaseQuestion: PropTypes.func.isRequired,
  validateQuiz: PropTypes.func.isRequired,
  questionData: PropTypes.array.isRequired,
  userAnswer: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

// == Export
export default AnswerQuestion;
