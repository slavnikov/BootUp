export const RECEIVE_SITE_DATA = 'RECEIVE_SITE_DATA';
import * as DataUtil from '../util/data_api_util';

export const fetchSiteData = () => {
  return (dispatch) => {
    DataUtil.fetchSiteData().then((data) => {
      dispatch(receiveSiteData(data));
    });
  };
};

export const receiveSiteData = (data) => {
  return ({
    type: RECEIVE_SITE_DATA,
    data: data
  });
};
