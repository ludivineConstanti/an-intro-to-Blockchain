import { connect } from 'react-redux';
import Quizzes from 'src/components/_pages/Quizzes';
import { getAllQuizzes } from 'src/actions/quizzesActions';
import { toggleMenu } from 'src/actions/appActions';

const mapStateToProps = (state) => ({
  quizzesList: state.quizzes.quizzesList,
  loading: state.global.loading,
  language: state.global.language,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => dispatch(toggleMenu()),
  getAllQuizzes: () => dispatch(getAllQuizzes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
