import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeInputValue, loginRequest } from 'src/actions/userActions';
import { validateQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  loginForm: state.user.loginForm,
  loginError: state.user.errors.loginError,
  showPopUp: state.global.showPopUp,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(changeInputValue(value, name)),
  handleLogin: () => dispatch(loginRequest()),
  validateQuiz: () => dispatch(validateQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
