import * as actionTypes from "../../../actions/actionTypes";

const initialState = {
  trending: [],
  loading: false,
  error: "",
};

export const trendingRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const trendingSuccess = (state, action) => {
  return {
    ...state,
    movie: action.movie,
    loading: false,
  };
};

export const trendingFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRENDING_REQUEST:
      return trendingRequest(state, action);
    case actionTypes.TRENDING_SUCCESS:
      return trendingSuccess(state, action);
    case actionTypes.TRENDING_FAIL:
      return trendingFail(state, action);
    default:
      return state;
  }
};

export default trendingReducer;
