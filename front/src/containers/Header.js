import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapState = (state) => {
  const letterFirstName = state.user.firstName.charAt(0).toUpperCase();
  const letterLastName = state.user.lastName.charAt(0).toUpperCase();
  const letters = letterFirstName + letterLastName;
  return ({
    initials: letters,
  });
};

export default connect(mapState, {})(Header);
