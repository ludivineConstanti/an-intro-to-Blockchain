import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeValue, login } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
