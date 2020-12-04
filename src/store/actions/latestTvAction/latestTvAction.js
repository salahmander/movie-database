import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const setLatestTvRequest = () => {
  return {
    type: actionTypes.LATEST_TV_REQUEST,
  };
};

export const setLatestTvSuccess = (latestTv) => {
  return {
    type: actionTypes.LATEST_TV_SUCCESS,
    latestTv: latestTv,
  };
};

export const setLatestTvFail = (error) => {
  return {
    type: actionTypes.LATEST_TV_FAIL,
    error: error,
  };
};

export const fetchLatestTv = () => {
  return (dispatch) => {
    dispatch(setLatestTvRequest());
    return axios
      .get(`${bodyURL}tv/on_the_air?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setLatestTvSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setLatestTvFail(error.message));
      });
  };
};
