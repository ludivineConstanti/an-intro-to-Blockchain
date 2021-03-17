import { connect } from 'react-redux';
import Register from 'src/components/_pages/_formUser/Register';
import { changeInputValue, registerRequest } from 'src/actions/userActions';
import { validateQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  registerForm: state.user.registerForm,
  emailError: state.user.errors.emailError,
  showPopUp: state.global.showPopUp,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeInputValue(value, name)),
  handleRegister: () => dispatch(registerRequest()),
  validateQuiz: () => dispatch(validateQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
