import * as SearchUtil from '../util/search_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
import { fetchProjects } from './project_actions';

export const receiveSearchResults = (results) => {
  return ({
    type: RECEIVE_SEARCH_RESULTS,
    results: results
  });
};

export const search = (query, alreadyFetched) => {
  return (dispatch) => {
    if (!alreadyFetched) {
      dispatch(fetchProjects()).then(() => {
        SearchUtil.search(query).then((response)=> {
          dispatch(receiveSearchResults(response.searchResults));
        });
      });
    } else {
      SearchUtil.search(query).then((response) => {
        dispatch(receiveSearchResults(response.searchResults));
      });
    }
  };
};
