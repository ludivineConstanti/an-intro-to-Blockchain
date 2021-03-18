import { connect } from 'react-redux';
import AboutIcon from 'src/components/_interactives/_buttonsHeader/AboutIcon';
import { changeValueGlobal } from 'src/actions/appActions';

const mapDispatchToProps = (dispatch) => ({
  onClickToShowAbout: () => dispatch(changeValueGlobal(true, 'showAbout')),
});

export default connect(null, mapDispatchToProps)(AboutIcon);
