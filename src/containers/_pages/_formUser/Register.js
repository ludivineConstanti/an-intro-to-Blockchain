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
  loading: state.global.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, object, name) => dispatch(changeInputValue(value, object, name)),
  handleRegister: () => dispatch(registerRequest()),
  validateQuiz: () => dispatch(validateQuiz()),
  resetQuizState: () => dispatch(leaveQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
