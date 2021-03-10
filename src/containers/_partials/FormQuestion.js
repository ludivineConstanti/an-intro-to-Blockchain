import { connect } from 'react-redux';
import FormQuestion from 'src/components/_partials/FormQuestion';
import { validateQuestion, stockAnswer } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  quizData: state.quiz.currentQuizData,
});

const mapDispatchToProps = (dispatch) => ({
  validateQuestion: () => dispatch(validateQuestion()),
  stockAnswer: (userAnswer, questionNumber) => dispatch(stockAnswer(userAnswer, questionNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormQuestion);
