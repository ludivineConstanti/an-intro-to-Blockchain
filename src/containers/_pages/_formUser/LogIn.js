import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeInputValue, loginRequest } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  loginForm: state.user.loginForm,
  loginError: state.user.errors.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeInputValue(value, name)),
  handleLogin: () => dispatch(loginRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
