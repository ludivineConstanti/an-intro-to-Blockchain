import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { changeValueGlobal } from 'src/actions/appActions';

const mapState = (state) => {
  const letterFirstName = state.user.infos.firstname.charAt(0).toUpperCase();
  const letterLastName = state.user.infos.lastname.charAt(0).toUpperCase();
  const letters = state.user.infos.isLoggedIn === true ? letterFirstName + letterLastName : '??';
  return ({
    isLoggedIn: state.user.infos.isLoggedIn,
    initials: letters,
    menuOpen: state.global.menuOpen,
    language: state.global.language,
    isPlaying: state.quiz.userQuizInfos.isPlaying,
  });
};
const mapDispatchToProps = (dispatch) => ({
  onClickLanguage: (event) => dispatch(changeValueGlobal(event.target.value, 'language')),
});

export default connect(mapState, mapDispatchToProps)(Header);
