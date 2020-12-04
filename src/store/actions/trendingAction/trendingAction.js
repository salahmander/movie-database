import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const setTrendingRequest = () => {
  return {
    type: actionTypes.TRENDING_REQUEST,
  };
};

export const setTrendingSuccess = (trending) => {
  return {
    type: actionTypes.TRENDING_SUCCESS,
    trending: trending,
  };
};

export const setTrendingFail = (error) => {
  return {
    type: actionTypes.TRENDING_FAIL,
    error: error,
  };
};

export const fetchTrending = () => {
  return (dispatch) => {
    dispatch(setTrendingRequest());
    return axios
      .get(`${bodyURL}trending/all/day?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setTrendingSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setTrendingFail(error.message));
      });
  };
};
