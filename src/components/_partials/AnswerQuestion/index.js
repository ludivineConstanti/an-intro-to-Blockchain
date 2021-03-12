// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';

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
}) => {
  const nextQuestion = () => {
    increaseQuestion(questionNumber + 1);
  };
  const { totalAnswer } = questionData[`question${questionNumber}`];
  const { id } = questionData[`question${questionNumber}`];
  let goodAnswer = 0;
  for (let i = 1; i < totalAnswer + 1; i += 1) {
    const currentQuizResponse = questionData[`question${questionNumber}`][`answer${i}`].goodAnswer;
    const currentUserResponse = userAnswer[`question${id}`][`answer${questionData[`question${questionNumber}`][`answer${i}`].id}`];
    if (currentQuizResponse === currentUserResponse) {
      goodAnswer += 1;
    }
  }
  const answerMessage = ['Tas de fumier', 'Un peu nullos sur les bords toi', 'Verre à moitié vide ou personne à moitié finie...', 'Si proche, et pourtant si loin', "OK, mais c'était simple"];
  return (
    <section className="answerQuestion">
      <TitlePage label={answerMessage[goodAnswer]} />
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
};

// == Export
export default AnswerQuestion;
