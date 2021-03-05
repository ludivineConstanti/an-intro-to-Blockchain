import { connect } from 'react-redux';
import Quizzes from 'src/components/_pages/Quizzes';
import { toggleMenu, getAllQuizzes } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  quizzesList: state.quizzes.quizzesList,
  loading: state.global.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButtonMenu: () => {
    dispatch(toggleMenu());
  },
  getAllQuizzes: () => dispatch(getAllQuizzes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
