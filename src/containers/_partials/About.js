import { connect } from 'react-redux';
import About from 'src/components/_partials/About';

const mapStateToProps = (state) => ({
  showAbout: state.global.showAbout,
});

export default connect(mapStateToProps, {})(About);
