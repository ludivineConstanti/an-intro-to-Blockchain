import { connect } from 'react-redux';
import Achievements from 'src/components/_pages/Achievements';

const mapStateToProps = (state) => ({
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
});

export default connect(mapStateToProps, {})(Achievements);
