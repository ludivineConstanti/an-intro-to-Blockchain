import { connect } from 'react-redux';
import Articles from 'src/components/_pages/Articles';
import { getAllArticles } from 'src/actions/articlesActions';

const mapStateToProps = (state) => ({
  articlesList: state.articles.currentArticlesData,
  loading: state.global.loading,
  language: state.global.language,
});

const mapDispatchToProps = (dispatch) => ({
  getAllArticles: () => dispatch(getAllArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
