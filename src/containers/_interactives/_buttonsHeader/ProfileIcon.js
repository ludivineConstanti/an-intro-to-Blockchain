import { connect } from 'react-redux';
import ProfileIcon from 'src/components/_interactives/_buttonsHeader/ProfileIcon';

const mapState = (state) => {
  const letterFirstName = state.user.infos.firstname.charAt(0).toUpperCase();
  const letterLastName = state.user.infos.lastname.charAt(0).toUpperCase();
  const letters = state.user.infos.isLoggedIn === true ? letterFirstName + letterLastName : '??';
  return ({
    initials: letters,
  });
};

export default connect(mapState, {})(ProfileIcon);
