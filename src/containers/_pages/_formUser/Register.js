import { connect } from 'react-redux';
import Register from 'src/components/_pages/_formUser/Register';
import { changeInputValue, registerRequest } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  registerForm: state.user.registerForm,
  emailError: state.user.errors.emailError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeInputValue(value, name)),
  handleRegister: () => dispatch(registerRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
