import { connect } from 'react-redux';
import Register from 'src/components/_pages/_formUser/Register';
import { changeValue, registerRequest, formSubmit } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
  password: state.user.password,
  controlPassword: state.user.controlPassword,
  email: state.user.email,
  formSubmit: state.global.formSubmit,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  handleRegister: () => {
    dispatch(registerRequest());
  },
  handleFormSubmit: () => {
    dispatch(formSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
