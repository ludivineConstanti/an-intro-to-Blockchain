import { connect } from 'react-redux';
import FormQuestion from 'src/components/_partials/FormQuestion';
import { changeUserQuizInfos } from 'src/actions/quizzesActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  isPlayingFalse: () => {
    console.log('triggered is playing false from router');
    dispatch(changeUserQuizInfos(false, 'isPlaying'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormQuestion);
