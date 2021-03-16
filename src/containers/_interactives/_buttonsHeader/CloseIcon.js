import { connect } from 'react-redux';
import CloseIcon from 'src/components/_interactives/_buttonsHeader/CloseIcon';
import { toggleMenu } from 'src/actions/appActions';

const mapState = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
});

export default connect(mapState, mapDispatchToProps)(CloseIcon);
