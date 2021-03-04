import { connect } from 'react-redux';
import Menu from 'src/components/_pages/Menu';
import { toggleMenu, logout } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  open: state.global.open,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => {
    const action = toggleMenu();
    dispatch(action);
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
