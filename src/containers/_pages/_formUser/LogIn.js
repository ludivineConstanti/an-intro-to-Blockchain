import { connect } from 'react-redux';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import { changeValue } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
