import DataProvider from 'data-provider';
import { types } from './actionTypes';

export * from 'enhancers/commonActions';

export const fetchData = (contentRoute, language) => (dispatch) => {
  dispatch({
    type: types.CONTENT_REQUEST_STARTED,
    payload: {
      route: contentRoute,
    },
  });

  DataProvider.getItemData(contentRoute, language)
    .then((data) => {
      dispatch({
        type: types.CONTENT_REQUEST_COMPLETED,
        payload: {
          route: contentRoute,
          data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: types.CONTENT_REQUEST_FAILED,
        payload: err,
        error: true,
      });
      console.error(err);
    });
};
