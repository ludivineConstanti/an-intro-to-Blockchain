import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  open: state.global.open,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
