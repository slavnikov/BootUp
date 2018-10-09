import * as SearchUtil from '../util/search_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
import { receiveProjects } from './project_actions';

export const receiveSearchResults = (results) => {
  return ({
    type: RECEIVE_SEARCH_RESULTS,
    results: results
  });
};

export const search = (query) => {
  return (dispatch) => {
      SearchUtil.search(query).then((payload) => {
        dispatch(receiveProjects(payload));
        const searchResults = Object.values(payload.projects).map(project => project.id);
        dispatch(receiveSearchResults(searchResults));
      });
    // }
  };
};
