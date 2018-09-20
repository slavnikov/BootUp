import { connect } from 'react-redux';
import { fetchCategoryIndex } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';
import HomePage from './home_page';
import { fetchSiteData } from '../../actions/site_data_actions';

const mapStateToProps = (state) => {
  return ({
    categories: state.entities.categories,
    projects: state.entities.projects,
    users: state.entities.users,
    load_state: state.ui,
    site_data: state.siteData
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCategoryIndex: () => dispatch(fetchCategoryIndex()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchSiteData: () => dispatch(fetchSiteData()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
