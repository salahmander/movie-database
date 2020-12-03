import * as actionTypes from "../../../actions/actionTypes";

const initialState = {
  tv: [],
  loading: false,
  error: "",
};

export const tvDetailRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const tvDetailSuccess = (state, action) => {
  return {
    ...state,
    tv: action.tv,
    loading: false,
  };
};

export const tvDetailFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

export const tvDetailReset = (state, action) => {
  return {
    ...state,
    tv: [],
    loading: false,
    error: "",
  };
};

const tvDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TV_DETAIL_REQUEST:
      return tvDetailRequest(state, action);
    case actionTypes.TV_DETAIL_SUCCESS:
      return tvDetailSuccess(state, action);
    case actionTypes.TV_DETAIL_FAIL:
      return tvDetailFail(state, action);
    case actionTypes.TV_DETAIL_RESET:
      return tvDetailReset(state, action);
    default:
      return state;
  }
};

export default tvDetailReducer;
