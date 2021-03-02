import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { toggleMenu } from 'src/actions/userActions';

const mapState = (state) => {
  const letterFirstName = state.user.firstName.charAt(0).toUpperCase();
  const letterLastName = state.user.lastName.charAt(0).toUpperCase();
  const letters = letterFirstName + letterLastName;
  return ({
    initials: letters,
    open: state.global.open,
  });
};
const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    const action = toggleMenu();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatchToProps)(Header);
