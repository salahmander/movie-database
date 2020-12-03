import * as actionTypes from "../../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../../constant";

export const setMovieDetailRequest = () => {
  return {
    type: actionTypes.MOVIE_DETAIL_REQUEST,
  };
};

export const setMovieDetailSuccess = (movie) => {
  return {
    type: actionTypes.MOVIE_DETAIL_SUCCESS,
    movie: movie,
  };
};

export const setMovieDetailFail = (error) => {
  return {
    type: actionTypes.MOVIE_DETAIL_FAIL,
    error: error,
  };
};

export const fetchMovieDetail = (movieID) => {
  return (dispatch) => {
    dispatch(setMovieDetailRequest());
    return axios
      .get(`${bodyURL}movie/${movieID}?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setMovieDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setMovieDetailFail(error.message));
      });
  };
};
