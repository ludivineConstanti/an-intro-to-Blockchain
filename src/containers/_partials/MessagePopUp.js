import { connect } from 'react-redux';
import MessagePopUp from 'src/components/_partials/MessagePopUp';
import { leaveQuiz } from 'src/actions/quizzesActions';
import { changeValueGlobal } from 'src/actions/appActions';

const mapDispatchToProps = (dispatch) => ({
  onClickToLeavePopUp: () => {
    dispatch(changeValueGlobal(false, 'showPopUp'));
    dispatch(leaveQuiz());
  },
});

export default connect(null, mapDispatchToProps)(MessagePopUp);
