import { RECEIVE_SITE_DATA } from '../actions/site_data_actions';

const SiteDataReducer = (state= {}, action) => {
  switch (action.type) {
    case RECEIVE_SITE_DATA:
      return action.data;
    default:
      return state;
  }
};

export default SiteDataReducer;
