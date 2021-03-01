import { connect } from 'react-redux';

import Home from 'src/components/_pages/Home';

const mapState = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapState, {})(Home);
