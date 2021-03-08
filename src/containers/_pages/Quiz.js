import { connect } from 'react-redux';
import Quiz from 'src/components/_pages/Quiz';
import { getOneQuiz } from 'src/actions/quizzesActions';
import { toggleMenu } from 'src/actions/appActions';

const mapStateToProps = (state) => ({
  quizData: state.quiz.currentQuizData,
  currentQuestion: state.quiz.userQUizInfos.currentQuestion,
  showAnswer: state.quiz.userQUizInfos.showAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  getOneQuiz: (id) => dispatch(getOneQuiz(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
