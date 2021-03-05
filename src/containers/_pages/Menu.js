import { connect } from 'react-redux';
import Menu from 'src/components/_pages/Menu';
import { toggleMenu } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  menuOpen: state.global.menuOpen,
  isLoggedIn: state.user.infos.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => {
    const action = toggleMenu();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
