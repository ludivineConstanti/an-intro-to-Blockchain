import { connect } from 'react-redux';
import Settings from 'src/components/_pages/_formUser/Settings';
import { logout, changeValueSettings } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  settingsForms: state.user.settingsForms,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValueSettings(value, name));
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
