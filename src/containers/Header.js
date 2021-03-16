import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { changeValueGlobal } from 'src/actions/appActions';

const mapState = (state) => ({
  isLoggedIn: state.user.infos.isLoggedIn,
  menuOpen: state.global.menuOpen,
  language: state.global.language,
  isPlaying: state.quiz.userQuizInfos.isPlaying,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLanguage: (event) => dispatch(changeValueGlobal(event.target.value, 'language')),
});

export default connect(mapState, mapDispatchToProps)(Header);
