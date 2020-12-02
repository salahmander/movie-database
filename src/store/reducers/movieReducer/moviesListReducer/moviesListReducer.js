import * as actionTypes from "../../../actions/actionTypes";

const initialState = {
  movies: [],
  loading: false,
  error: "",
};

export const moviesListRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const moviesListSuccess = (state, action) => {
  return {
    ...state,
    movies: action.movies,
    loading: false,
  };
};

export const moviesListFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

export const moviesListReset = (state, action) => {
  return {
    ...state,
    movies: [],
    loading: false,
    error: "",
  };
};

const moviesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIES_LIST_REQUEST:
      return moviesListRequest(state, action);
    case actionTypes.MOVIES_LIST_SUCCESS:
      return moviesListSuccess(state, action);
    case actionTypes.MOVIES_LIST_FAIL:
      return moviesListFail(state, action);
    case actionTypes.MOVIES_LIST_RESET:
      return moviesListReset(state, action);
    default:
      return state;
  }
};

export default moviesListReducer;
