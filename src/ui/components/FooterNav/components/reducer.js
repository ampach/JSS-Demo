import { types } from './actionTypes';

const initialState = {
  loading: false,
  data: {
      children: []
  },
  footerNavigation: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_STARTED:
      return { ...state, loading: true };
    case types.INIT_COMPLETED:
      return { ...state, loading: false };
    case types.CONTENT_REQUEST_STARTED:
      return { ...state, loading: true };
    case types.CONTENT_REQUEST_COMPLETED:
      return { ...state, loading: false, data: action.payload.data };
    case types.CONTENT_REQUEST_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
