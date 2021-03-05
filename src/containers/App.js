import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  menuOpen: state.global.menuOpen,
  loading: state.global.loading,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
