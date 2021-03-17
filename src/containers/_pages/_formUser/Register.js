import { connect } from 'react-redux';
import Register from 'src/components/_pages/_formUser/Register';
import { changeInputValue, registerRequest } from 'src/actions/userActions';
import { validateQuiz, leaveQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  registerForm: state.user.registerForm,
  emailError: state.user.errors.emailError,
  emailFormatError: state.user.errors.emailFormatError,
  newPasswordError: state.user.errors.newPasswordError,
  showPopUp: state.global.showPopUp,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeInputValue(value, name)),
  handleRegister: () => dispatch(registerRequest()),
  validateQuiz: () => dispatch(validateQuiz()),
  resetQuizState: () => dispatch(leaveQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
