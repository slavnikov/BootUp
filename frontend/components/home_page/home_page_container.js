import { connect } from 'react-redux';
import { fetchCategoryIndex } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';
import { dbFetchCommenced } from '../../actions/ui_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => {
  return ({
    categories: state.entities.categories,
    projects: state.entities.projects,
    users: state.entities.users,
    load_state: state.ui
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCategoryIndex: () => dispatch(fetchCategoryIndex()),
    fetchProjects: () => dispatch(fetchProjects()),
    dbFetchCommenced: () => dispatch(dbFetchCommenced())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
