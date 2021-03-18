import { connect } from 'react-redux';
import Achievements from 'src/components/_pages/Achievements';
import { getAllQuizzes } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
  firstname: state.user.infos.firstname,
  lastname: state.user.infos.lastname,
  quizzesList: state.quizzes.quizzesList,
  language: state.global.language,
});

const mapDispatchToProps = (dispatch) => ({
  getAllQuizzes: () => dispatch(getAllQuizzes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
