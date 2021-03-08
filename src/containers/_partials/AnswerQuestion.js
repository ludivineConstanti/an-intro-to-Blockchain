import { connect } from 'react-redux';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';
import { increaseQuestion } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuestion: () => dispatch(increaseQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
