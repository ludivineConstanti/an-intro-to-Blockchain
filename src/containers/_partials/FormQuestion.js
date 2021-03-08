import { connect } from 'react-redux';
import FormQuestion from 'src/components/_partials/FormQuestion';
import { confirmQuestion, stockAnswer } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  quizData: state.quiz.currentQuizData,
});

const mapDispatchToProps = (dispatch) => ({
  confirmQuestion: () => dispatch(confirmQuestion()),
  stockAnswer: (userAnswer, questionNumber) => dispatch(stockAnswer(userAnswer, questionNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormQuestion);
