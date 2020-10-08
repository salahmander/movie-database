import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const fetchAllHomeData = () => {
  return (dispatch) => {
    dispatch(startLoading());
    dispatch(fetchTrending());
    dispatch(fetchNowMovie());
    dispatch(fetchNowTV());
  };
};

export const startLoading = () => {
  return {
    type: actionTypes.START_LANDING_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LANDING_LOADING,
  };
};

export const setTrending = (trendingData) => {
  return {
    type: actionTypes.FETCH_TRENDING,
    trending: trendingData,
  };
};

export const setNowTV = (nowTVData) => {
  return {
    type: actionTypes.FETCH_NOW_TV,
    nowTV: nowTVData,
  };
};

export const setNowMovie = (nowMovieData) => {
  return {
    type: actionTypes.FETCH_NOW_MOVIE,
    nowMovie: nowMovieData,
  };
};

export const setError = (error) => {
  return {
    type: actionTypes.LANDING_ERROR,
    landingError: error,
  };
};

export const fetchTrending = () => {
  return (dispatch) => {
    return axios
      .get(`${bodyURL}trending/all/day?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setTrending(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export const fetchNowMovie = () => {
  return (dispatch) => {
    return axios
      .get(`${bodyURL}movie/now_playing?api_key=${APIKey}&region=GB`)
      .then((response) => {
        dispatch(setNowMovie(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export const fetchNowTV = () => {
  return (dispatch) => {
    return axios
      .get(`${bodyURL}tv/on_the_air?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setNowTV(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};
