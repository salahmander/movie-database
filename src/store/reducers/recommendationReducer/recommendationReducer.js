import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../../utility/utility";

const initialState = {
  movieRecommendation: {},
  TVRecommendation: {},
  recommendationLoading: false,
  recommendationError: "",
};

const startRecommendationLoading = (state, action) => {
  return updateObject(state, {
    recommendationLoading: true,
  });
};

const stopRecommendationLoading = (state, action) => {
  return updateObject(state, {
    recommendationLoading: false,
  });
};

const fetchMovieRecommendation = (state, action) => {
  return updateObject(state, {
    movieRecommendation: action.movieRecommendation,
    recommendationLoading: false,
  });
};

const fetchTVRecommendation = (state, action) => {
  return updateObject(state, {
    TVRecommendation: action.TVRecommendation,
    recommendationLoading: false,
  });
};

const setRecommendationError = (state, action) => {
  return updateObject(state, {
    recommendationError: action.recommendationError,
    recommendationLoading: false,
  });
};

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_RECOMMENDATION_LOADING:
      return startRecommendationLoading(state, action);
    case actionTypes.STOP_RECOMMENDATION_LOADING:
      return stopRecommendationLoading(state, action);
    case actionTypes.FETCH_MOVIE_RECOMMENDATION:
      return fetchMovieRecommendation(state, action);
    case actionTypes.FETCH_TV_RECOMMENDATION:
      return fetchTVRecommendation(state, action);
    case actionTypes.RECOMMEDNATION_ERROR:
      return setRecommendationError(state, action);
    default:
      return state;
  }
};

export default recommendationReducer;
