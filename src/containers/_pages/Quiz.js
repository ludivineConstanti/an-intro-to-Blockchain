import { connect } from 'react-redux';
import Quiz from 'src/components/_pages/Quiz';
import { getOneQuiz, changeUserQuizInfos } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  quizData: state.quiz.currentQuizData,
  questionNumber: state.quiz.userQuizInfos.questionNumber,
  questionId: state.quiz.userQuizInfos.currentQuestionId,
  showAnswer: state.quiz.userQuizInfos.showAnswer,
  language: state.global.language,
  showPopUp: state.global.showPopUp,
});

const mapDispatchToProps = (dispatch) => ({
  getOneQuiz: (id) => dispatch(getOneQuiz(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
