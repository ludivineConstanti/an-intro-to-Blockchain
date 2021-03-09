import { connect } from 'react-redux';
import Loading from 'src/components/Loading';

const mapStateToProps = (state) => ({
  language: state.global.language,
});

export default connect(mapStateToProps, {})(Loading);
