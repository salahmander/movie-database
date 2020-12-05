import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const setMovieRecommendationRequest = () => {
  return {
    type: actionTypes.MOVIE_RECOMMENDATION_REQUEST,
  };
};

export const setMovieRecommendationSuccess = (movieRecommendation) => {
  return {
    type: actionTypes.MOVIE_RECOMMENDATION_SUCCESS,
    movieRecommendation: movieRecommendation,
  };
};

export const setMovieRecommendationFail = (error) => {
  return {
    type: actionTypes.MOVIE_RECOMMENDATION_FAIL,
    error: error,
  };
};

export const fetchMovieRecommendation = (movieID) => {
  return (dispatch) => {
    dispatch(setMovieRecommendationRequest());
    return axios
      .get(`${bodyURL}movie/${movieID}/recommendations?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setMovieRecommendationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setMovieRecommendationFail(error.message));
      });
  };
};
