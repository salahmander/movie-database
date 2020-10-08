import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const setSearchName = (name) => {
  return {
    type: actionTypes.SET_NAME,
    name: name,
  };
};

export const startLoading = () => {
  return {
    type: actionTypes.START_MOVIE_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_MOVIE_LOADING,
  };
};

export const setMovies = (movieData) => {
  return {
    type: actionTypes.FETCH_MOVIES,
    movies: movieData,
  };
};

export const setMovieInfo = (movieInfo) => {
  return {
    type: actionTypes.FETCH_MOVIE_INFO,
    movieInfo: movieInfo,
  };
};

export const setTVInfo = (TVInfo) => {
  return {
    type: actionTypes.FETCH_TV_INFO,
    TVInfo: TVInfo,
  };
};

export const setError = (error) => {
  return {
    type: actionTypes.MOVIE_ERROR,
    movieError: error,
  };
};

export const fetchMovies = (name) => {
  return (dispatch) => {
    dispatch(startLoading());
    return axios
      .get(`${bodyURL}search/multi?api_key=${APIKey}&query=${name}`)
      .then((response) => {
        dispatch(setMovies(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export const fetchMovieInfo = (movieID) => {
  return (dispatch) => {
    dispatch(startLoading());
    return axios
      .get(`${bodyURL}movie/${movieID}?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setMovieInfo(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export const fetchTVInfo = (TVID) => {
  return (dispatch) => {
    dispatch(startLoading());
    return axios
      .get(`${bodyURL}tv/${TVID}?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setTVInfo(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};
