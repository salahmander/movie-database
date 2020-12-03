import * as actionTypes from "../../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../../constant";

export const setTvDetailRequest = () => {
  return {
    type: actionTypes.TV_DETAIL_REQUEST,
  };
};

export const setTvDetailSuccess = (tv) => {
  return {
    type: actionTypes.TV_DETAIL_SUCCESS,
    tv: tv,
  };
};

export const setTvDetailFail = (error) => {
  return {
    type: actionTypes.TV_DETAIL_FAIL,
    error: error,
  };
};

export const fetchTvDetail = (tvID) => {
  return (dispatch) => {
    dispatch(setTvDetailRequest());
    return axios
      .get(`${bodyURL}tv/${tvID}?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setTvDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setTvDetailFail(error.message));
      });
  };
};
