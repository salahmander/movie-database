import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const startLoading = () => {
  return {
    type: actionTypes.START_RECOMMENDATION_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_RECOMMENDATION_LOADING,
  };
};

export const setMovieRecommendation = (movieRecommendation) => {
  return {
    type: actionTypes.FETCH_MOVIE_RECOMMENDATION,
    movieRecommendation: movieRecommendation,
  };
};

export const setTvRecommendation = (TVRecommendation) => {
  return {
    type: actionTypes.FETCH_TV_RECOMMENDATION,
    TVRecommendation: TVRecommendation,
  };
};

export const setError = (error) => {
  return {
    type: actionTypes.RECOMMEDNATION_ERROR,
    recommendationError: error,
  };
};

export const fetchMovieRecommendation = (movieID) => {
  return (dispatch) => {
    dispatch(startLoading());
    return axios
      .get(`${bodyURL}movie/${movieID}/recommendations?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setMovieRecommendation(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export const fetchTVRecommendation = (TVID) => {
  return (dispatch) => {
    dispatch(startLoading());
    return axios
      .get(`${bodyURL}tv/${TVID}/recommendations?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setTvRecommendation(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};
