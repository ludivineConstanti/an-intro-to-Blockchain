import { connect } from 'react-redux';
import Menu from 'src/components/_pages/Menu';
import { toggleMenu } from 'src/actions/appActions';
import { logout } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  menuOpen: state.global.menuOpen,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
