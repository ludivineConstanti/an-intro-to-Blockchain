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
    console.log('je veux modifier la valeur de open');
    // pour modifier une valeur du state
    // il faut créer une action : action types + action creator
    const action = toggleMenu();
    // dispatch l'action
    dispatch(action);
    // gérer l'action dans le reducer + renvoyer le nouveau state
  },
});

export default connect(mapState, mapDispatchToProps)(Header);
