import { connect } from 'react-redux';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';
import { increaseQuestion, validateQuiz } from 'src/actions/quizzesActions';

const mapDispatchToProps = (dispatch) => ({
  increaseQuestion: (questionNumber) => dispatch(increaseQuestion(questionNumber)),
  validateQuiz: () => dispatch(validateQuiz()),
});

export default connect(null, mapDispatchToProps)(AnswerQuestion);
