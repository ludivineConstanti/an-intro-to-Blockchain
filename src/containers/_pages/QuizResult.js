import { connect } from 'react-redux';
import QuizResult from 'src/components/_pages/QuizResult';
import { changeValueGlobal } from 'src/actions/appActions';

const mapStateToProps = (state) => ({
  score: state.quiz.userQuizInfos.score,
  isLoggedIn: state.user.infos.isLoggedIn,
  showPopUp: state.global.showPopUp,
});

const mapDispatchToProps = (dispatch) => ({
  onClickToShowPopUp: () => dispatch(changeValueGlobal(true, 'showPopUp')),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizResult);
