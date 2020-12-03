import * as actionTypes from "../../../actions/actionTypes";

const initialState = {
  movie: [],
  loading: false,
  error: "",
};

export const movieDetailRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const movieDetailSuccess = (state, action) => {
  return {
    ...state,
    movie: action.movie,
    loading: false,
  };
};

export const movieDetailFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

export const movieDetailReset = (state, action) => {
  return {
    ...state,
    movie: [],
    loading: false,
    error: "",
  };
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_DETAIL_REQUEST:
      return movieDetailRequest(state, action);
    case actionTypes.MOVIE_DETAIL_SUCCESS:
      return movieDetailSuccess(state, action);
    case actionTypes.MOVIE_DETAIL_FAIL:
      return movieDetailFail(state, action);
    case actionTypes.MOVIE_DETAIL_RESET:
      return movieDetailReset(state, action);
    default:
      return state;
  }
};

export default movieDetailReducer;
