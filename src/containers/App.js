import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  menuOpen: state.global.menuOpen,
  loading: state.global.loading,
  isLoggedIn: state.user.infos.isLoggedIn,
  language: state.global.language,
  hasFinishedQuiz: state.quiz.userQuizInfos.hasFinishedQuiz,
});

export default connect(mapStateToProps, {})(App);
