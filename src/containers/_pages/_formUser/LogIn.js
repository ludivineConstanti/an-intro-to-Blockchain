import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeValue, loginRequest } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  handleLogin: () => {
    dispatch(loginRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
