import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  open: state.global.open,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
