import { connect } from 'react-redux';
import Menu from 'src/components/_pages/Menu';
import { toggleMenu, changeValueGlobal } from 'src/actions/appActions';
import { logout } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.infos.isLoggedIn,
  language: state.global.language,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  handleLogout: () => dispatch(logout()),
  onClickLanguage: (event) => dispatch(changeValueGlobal(event.target.value, 'language')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
