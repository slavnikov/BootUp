import { connect } from 'react-redux';
import { fetchCategoryIndex, fetchCategoryProjects } from '../../actions/category_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => {
  return ({
    categories: state.entities.categories,
    projects: state.entities.projects
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCategoryIndex: () => dispatch(fetchCategoryIndex()),
    fetchCategoryProjects: (id) => dispatch(fetchCategoryProjects(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
