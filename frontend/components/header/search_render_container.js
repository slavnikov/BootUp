import { connect } from 'react-redux';
import SearchRender from './search_render';

const mapStateToProps = (state) => {
  let results = [];
  let admins = {};

  if (state.session.searchResults) {
    results = state.session.searchResults.map((index) => {
      return state.entities.projects[index];
    });

    results = results.filter((result) => {return Boolean(result);});

    results.forEach((result) => {
      admins[result.admin_id] = state.entities.users[result.admin_id];
    });
  }

  return ({
    resultIndeces: state.session.searchResults,
    results: results,
    searchFinished: Boolean(state.session.searchResults),
    admins: admins,
  });
};

export default connect(mapStateToProps)(SearchRender);
