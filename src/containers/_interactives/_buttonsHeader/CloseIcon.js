import { connect } from 'react-redux';
import CloseIcon from 'src/components/_interactives/_buttonsHeader/CloseIcon';
import { toggleMenu, changeValueGlobal } from 'src/actions/appActions';

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  onClickToChangeGlobal: (value, property) => dispatch(changeValueGlobal(value, property)),
});

export default connect(null, mapDispatchToProps)(CloseIcon);
