import { connect } from 'react-redux';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';
import { increaseQuestion, validateQuiz, userFinishedQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => (
  {
    userAnswers: state.quiz.userQuizInfos.userAnswers,
    currentQuizData: state.quiz.currentQuizData,
    userQuizInfos: state.quiz.userQuizInfos,
    isLoggedIn: state.user.infos.isLoggedIn,
  }
);

const mapDispatchToProps = (dispatch) => ({
  increaseQuestion: (questionNumber) => dispatch(increaseQuestion(questionNumber)),
  calculateQuiz: (currentQuizData, userQuizInfos, userAnswers) => {
    let goodAnswers = 0;
    let totalAnswers = 0;
    if (userQuizInfos.questionNumber
        === currentQuizData.totalQuestions) {
      for (let i = 1; i < currentQuizData.totalQuestions + 1; i += 1) {
        for (let y = 0; y < currentQuizData[`question${i}`].answersInfo.total; y += 1) {
          const currentAnswer = currentQuizData[`question${i}`].answers[y];
          const AnswerQuiz = currentAnswer.goodAnswer;
          const answerUser = userAnswers[`question${i}`][`answer${currentAnswer.id}`];
          if (AnswerQuiz === answerUser) {
            goodAnswers += 1;
          }
          totalAnswers += 1;
        }
      }
      const score = Math.round(goodAnswers / totalAnswers * 100);
      dispatch(userFinishedQuiz(score, totalAnswers, goodAnswers));
    }
  },
  validateQuiz: () => dispatch(validateQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
