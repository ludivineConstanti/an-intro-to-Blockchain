import { connect } from 'react-redux';
import App from 'src/components/App';
import { changeUserQuizInfos } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  menuOpen: state.global.menuOpen,
  loading: state.global.loading,
  isLoggedIn: state.user.infos.isLoggedIn,
  language: state.global.language,
  hasFinishedQuiz: state.quiz.userQuizInfos.hasFinishedQuiz,
  backgroundClassName: state.global.backgroundClassName,
});

const mapDispatchToProps = (dispatch) => ({
  isPlayingTrue: () => {
    console.log('triggered is playing true from router');
    dispatch(changeUserQuizInfos(true, 'isPlaying'));
  },
  isPlayingFalse: () => {
    console.log('triggered is playing false from router');
    dispatch(changeUserQuizInfos(false, 'isPlaying'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
