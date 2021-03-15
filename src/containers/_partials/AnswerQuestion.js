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
    let score = 0;
    if (userQuizInfos.questionNumber === currentQuizData.totalQuestions) {
      for (let i = 0; i < currentQuizData.totalQuestions; i += 1) {
        let goodAnswers = 0;
        let wrongAnswers = 0;
        const questionId = `question${i + currentQuizData.idFirstQuestion}`;

        for (let y = 0; y < currentQuizData[questionId].answersInfo.total; y += 1) {
          console.log('total answers', currentQuizData[questionId].answersInfo.total);
          const currentAnswer = currentQuizData[questionId].answers[y];
          const AnswerQuiz = currentAnswer.goodAnswer;
          const answerUser = userAnswers[questionId][`answer${currentAnswer.id}`];
          if (AnswerQuiz) {
            if (answerUser) goodAnswers += 1;
          }
          if (!AnswerQuiz) {
            if (answerUser) wrongAnswers += 1;
          }
        }
        if (currentQuizData[questionId].answersInfo.good === goodAnswers && wrongAnswers === 0) {
          score += goodAnswers / currentQuizData[questionId].answersInfo.good;
        }
        else if (currentQuizData[questionId].answersInfo.good > 1) {
          let numAdded = goodAnswers / currentQuizData[questionId].answersInfo.good;
          numAdded -= wrongAnswers * 0.5;
          if (numAdded > 0) score += numAdded;
        }
      }

      const scorePercentage = Math.round(score / currentQuizData.totalQuestions * 100);

      dispatch(userFinishedQuiz(scorePercentage, currentQuizData.totalQuestions, score));
    }
  },
  validateQuiz: () => dispatch(validateQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
