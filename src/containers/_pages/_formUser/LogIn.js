import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeValueLogin, loginRequest } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  loginForm: state.user.loginForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeValueLogin(value, name)),
  handleLogin: () => dispatch(loginRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
