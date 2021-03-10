import { connect } from 'react-redux';
import QuizResult from 'src/components/_pages/QuizResult';

const mapStateToProps = (state) => ({
  score: state.quiz.userQuizInfos.score,
  totalAnswers: state.quiz.userQuizInfos.totalAnswers,
  goodAnswers: state.quiz.userQuizInfos.goodAnswers,
});

export default connect(mapStateToProps, {})(QuizResult);
