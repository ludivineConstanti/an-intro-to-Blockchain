import { connect } from 'react-redux';
import Achievements from 'src/components/_pages/Achievements';
import { getAllQuizzes } from 'src/actions/quizzesActions';
import { getUserScores } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
  quizzesList: state.quizzes.quizzesList,
  userScore: state.user.infos.scoreAllQuiz,
  language: state.global.language,
});

const mapDispatchToProps = (dispatch) => ({
  getAllQuizzes: () => dispatch(getAllQuizzes()),
  getUserScores: () => dispatch(getUserScores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
