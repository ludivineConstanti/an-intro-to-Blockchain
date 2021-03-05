import { connect } from 'react-redux';
import Quiz from 'src/components/_pages/Quiz';
import { toggleMenu, getOneQuiz } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  loading: state.global.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  getOneQuiz: (id) => dispatch(getOneQuiz(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
