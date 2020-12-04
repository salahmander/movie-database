import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  latestMovie: [],
  loading: false,
  error: "",
};

export const latestMovieRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const latestMovieSuccess = (state, action) => {
  return {
    ...state,
    latestMovie: action.latestMovie,
    loading: false,
  };
};

export const latestMovieFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const latestMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LATEST_MOVIE_REQUEST:
      return latestMovieRequest(state, action);
    case actionTypes.LATEST_MOVIE_SUCCESS:
      return latestMovieSuccess(state, action);
    case actionTypes.LATEST_MOVIE_FAIL:
      return latestMovieFail(state, action);
    default:
      return state;
  }
};

export default latestMovieReducer;
