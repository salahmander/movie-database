import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const setLatestMovieRequest = () => {
  return {
    type: actionTypes.LATEST_MOVIE_REQUEST,
  };
};

export const setLatestMovieSuccess = (latestMovie) => {
  return {
    type: actionTypes.LATEST_MOVIE_SUCCESS,
    latestMovie: latestMovie,
  };
};

export const setLatestMovieFail = (error) => {
  return {
    type: actionTypes.LATEST_MOVIE_FAIL,
    error: error,
  };
};

export const fetchLatestMovie = () => {
  return (dispatch) => {
    dispatch(setLatestMovieRequest());
    return axios
       //Fetches latest movies released in  Great Britain. 
      .get(`${bodyURL}movie/now_playing?api_key=${APIKey}&region=GB`)
      .then((response) => {
        dispatch(setLatestMovieSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setLatestMovieFail(error.message));
      });
  };
};
