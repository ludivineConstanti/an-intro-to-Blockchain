import { connect } from 'react-redux';
import Settings from 'src/components/_pages/_formUser/Settings';
import {
  logout,
  changeInputValue,
  changeUserSettings,
  changeUserEmail,
  deleteAccountRequest,
} from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  settingsForms: state.user.settingsForms,
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
  incorrectPasswordError: state.user.errors.incorrectPasswordError,
  newPasswordError: state.user.errors.newPasswordError,
  emailError: state.user.errors.emailError,
  emailFormatError: state.user.errors.emailFormatError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeInputValue(value, name)),
  handleLogout: () => dispatch(logout()),
  handleChangeSettings: () => dispatch(changeUserSettings()),
  handleChangeEmail: () => dispatch(changeUserEmail()),
  handleDeleteUser: () => dispatch(deleteAccountRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
