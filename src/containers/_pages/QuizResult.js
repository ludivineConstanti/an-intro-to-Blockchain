import { connect } from 'react-redux';
import QuizResult from 'src/components/_pages/QuizResult';

const mapStateToProps = (state) => ({
  score: state.quiz.userQuizInfos.score,
  isLoggedIn: state.user.infos.isLoggedIn,
  showPopUp: state.global.showPopUp,
});

export default connect(mapStateToProps, {})(QuizResult);
