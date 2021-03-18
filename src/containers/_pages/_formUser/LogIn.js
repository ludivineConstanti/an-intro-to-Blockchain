import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeInputValue, loginRequest } from 'src/actions/userActions';
import { validateQuiz, leaveQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  loginForm: state.user.loginForm,
  loginError: state.user.errors.loginError,
  showPopUp: state.global.showPopUp,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, object, name) => dispatch(changeInputValue(value, object, name)),
  handleLogin: () => dispatch(loginRequest()),
  validateQuiz: () => dispatch(validateQuiz()),
  resetQuizState: () => dispatch(leaveQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
