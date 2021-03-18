import { connect } from 'react-redux';
import Quiz from 'src/components/_pages/Quiz';
import { getOneQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  quizData: state.quiz.currentQuizData,
  questionNumber: state.quiz.userQuizInfos.questionNumber,
  questionId: state.quiz.userQuizInfos.currentQuestionId,
  showAnswer: state.quiz.userQuizInfos.showAnswer,
  language: state.global.language,
  showPopUp: state.global.showPopUp,
  showAbout: state.global.showAbout,
});

const mapDispatchToProps = (dispatch) => ({
  getOneQuiz: (id) => dispatch(getOneQuiz(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
