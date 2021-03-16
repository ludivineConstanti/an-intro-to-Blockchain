import { connect } from 'react-redux';
import MenuIcon from 'src/components/_interactives/_buttonsHeader/MenuIcon';
import { toggleMenu } from 'src/actions/appActions';

const mapState = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
});

export default connect(mapState, mapDispatchToProps)(MenuIcon);
