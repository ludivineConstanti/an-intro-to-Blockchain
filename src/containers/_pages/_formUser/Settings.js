import { connect } from 'react-redux';
import Settings from 'src/components/_pages/_formUser/Settings';
import {
  logout,
  changeValueSettings,
  changeUserSettings,
  changeUserEmail,
  deleteUser,
} from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  settingsForms: state.user.settingsForms,
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeValueSettings(value, name)),
  handleLogout: () => dispatch(logout()),
  handleChangeSettings: () => dispatch(changeUserSettings()),
  handleChangeEmail: () => dispatch(changeUserEmail()),
  handleDeleteUser: () => dispatch(deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
