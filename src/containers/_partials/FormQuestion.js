import { connect } from 'react-redux';
import FormQuestion from 'src/components/_partials/FormQuestion';
import { changeUserQuizInfos, stockAnswer } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  quizData: state.quiz.currentQuizData,
  userAnswer: state.quiz.userQuizInfos.userAnswers[`question${state.quiz.currentQuizData[`question${state.quiz.userQuizInfos.currentQuestionId}`].id}`],
});

const mapDispatchToProps = (dispatch) => ({
  validateQuestion: () => dispatch(changeUserQuizInfos(true, 'showAnswer')),
  stockAnswer: (userAnswer, questionNumber) => dispatch(stockAnswer(userAnswer, questionNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormQuestion);
