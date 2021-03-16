import { connect } from 'react-redux';
import MenuIcon from 'src/components/_interactives/_buttonsHeader/MenuIcon';
import { toggleMenu } from 'src/actions/appActions';

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
});

export default connect(null, mapDispatchToProps)(MenuIcon);
