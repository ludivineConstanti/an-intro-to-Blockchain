import { connect } from 'react-redux';
import AnswerQuestion from 'src/components/_partials/AnswerQuestion';
import { increaseQuestion, validateQuiz } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  questionResult: state.quiz.userQuizInfos[6],
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuestion: (questionNumber) => dispatch(increaseQuestion(questionNumber)),
  validateQuiz: () => dispatch(validateQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
