import { connect } from 'react-redux';
import App from 'src/components/App';
import { toggleMenu } from 'src/actions/appActions';

const mapStateToProps = (state) => ({
  menuOpen: state.global.menuOpen,
  loading: state.global.loading,
  isLoggedIn: state.user.infos.isLoggedIn,
  language: state.global.language,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogOut: () => {
    dispatch(toggleMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
