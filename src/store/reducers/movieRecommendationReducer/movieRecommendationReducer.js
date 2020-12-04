import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  movieRecommendation: [],
  loading: false,
  error: "",
};

export const movieRecommendationRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const movieRecommendationSuccess = (state, action) => {
  return {
    ...state,
    movieRecommendation: action.movieRecommendation,
    loading: false,
  };
};

export const movieRecommendationFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

export const movieRecommendationReset = (state, action) => {
  return {
    ...state,
    movieRecommendation: [],
    loading: false,
    error: "",
  };
};

const movieRecommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_RECOMMENDATION_REQUEST:
      return movieRecommendationRequest(state, action);
    case actionTypes.MOVIE_RECOMMENDATION_SUCCESS:
      return movieRecommendationSuccess(state, action);
    case actionTypes.MOVIE_RECOMMENDATION_FAIL:
      return movieRecommendationFail(state, action);
    case actionTypes.MOVIE_RECOMMENDATION_RESET:
      return movieRecommendationReset(state, action);
    default:
      return state;
  }
};

export default movieRecommendationReducer;
