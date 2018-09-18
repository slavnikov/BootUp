import { connect } from 'react-redux';
import { fetchCategoryIndex } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => {
  return ({
    categories: state.entities.categories,
    projects: state.entities.projects,
    users: state.entities.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCategoryIndex: () => dispatch(fetchCategoryIndex()),
    fetchProjects: () => dispatch(fetchProjects())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
