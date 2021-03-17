import { connect } from 'react-redux';
import CloseIcon from 'src/components/_interactives/_buttonsHeader/CloseIcon';
import { toggleMenu, changeValueGlobal } from 'src/actions/appActions';

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  onClickToShowPopUp: () => dispatch(changeValueGlobal(true, 'showPopUp')),
});

export default connect(null, mapDispatchToProps)(CloseIcon);
