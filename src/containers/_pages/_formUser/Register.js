import { connect } from 'react-redux';
import Register from 'src/components/_pages/_formUser/Register';
import { changeValueRegister, registerRequest } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  registerForm: state.user.registerForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValueRegister(value, name));
  },
  handleRegister: () => {
    dispatch(registerRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
