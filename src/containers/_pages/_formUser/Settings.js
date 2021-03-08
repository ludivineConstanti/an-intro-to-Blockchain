import { connect } from 'react-redux';
import Settings from 'src/components/_pages/_formUser/Settings';
import { logout } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
