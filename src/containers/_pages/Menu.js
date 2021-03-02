import { connect } from 'react-redux';
import Menu from 'src/components/_pages/Menu';
import { toggleMenu } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  open: state.global.open,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    const action = toggleMenu();
    dispatch(action);
    console.log('coucou container menu');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
