import * as actionTypes from "../../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../../constant";

export const setMoviesListRequest = () => {
  return {
    type: actionTypes.MOVIES_LIST_REQUEST,
  };
};

export const setMoviesListSuccess = (movies) => {
  return {
    type: actionTypes.MOVIES_LIST_SUCCESS,
    movies: movies,
  };
};

export const setMoviesListFail = (error) => {
  return {
    type: actionTypes.MOVIES_LIST_FAIL,
    error: error,
  };
};

export const fetchMoviesList = (name) => {
  return (dispatch) => {
    dispatch(setMoviesListRequest());
    return axios
      .get(`${bodyURL}search/multi?api_key=${APIKey}&query=${name}`)
      .then((response) => {
        dispatch(setMoviesListSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setMoviesListFail(error.message));
      });
  };
};
