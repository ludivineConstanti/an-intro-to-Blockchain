// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

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
  const nextQuestion = () => {
    increaseQuestion(questionNumber + 1);
  };
  /* const { totalAnswer } = questionData[`question${questionNumber}`];
  const { id } = questionData[`question${questionNumber}`];
  const totalGoodAnswers = 0;
  const goodAnswers = 0;
  const totalBadAnswers = 0;
  const badAnswers = 0;
  const score = 4; */
  /* for (let i = 1; i < totalAnswer + 1; i += 1) {
    const currentQuizResponse = questionData[`question${questionNumber}`][`answer${i}`].goodAnswer;
    const currentUserResponse = userAnswer[`question${id}`][`answer${questionData[`question${questionNumber}`][`answer${i}`].id}`];
     if (currentQuizResponse) {
      totalGoodAnswers += 1;
      if (currentQuizResponse === currentUserResponse) {
        goodAnswers += 1;
      }
      else score -= 1;
    }
    else if (!currentQuizResponse) {
      totalBadAnswers += 1;
      if (currentQuizResponse !== currentUserResponse) {
        badAnswers += 1;
        score -= 1;
      }
    }
  } */

  const explanationMessage = explanationScore(questionNumber, questionData, userAnswer, language);

  const answerMessage = {
    fr: ['Tout faux', 'Oups', 'Non', 'Presque', 'Parfait !'],
    en: ['Nope', 'Oops', 'No', 'Almost there', 'Perfect!'],
  };

  return (
    <section className="answerQuestion">
      <TitleCategory
        label={explanationMessage.label}
        subtitle={explanationMessage.subtitle}
      />
      <p className="answerQuestion__justification ">{justification}</p>
      <div className="answerQuestion__links">
        <LinkButton label="Learn more" path={articleLink} externalLink />
        {totalNum !== questionNumber
          ? <SubmitButton label="Next question" onClick={nextQuestion} />
          : <LinkButton label="Results" path="/quizResult" onClickLink={validateQuiz} />}
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
