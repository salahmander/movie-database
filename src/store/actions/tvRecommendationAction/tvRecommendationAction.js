import * as actionTypes from "../actionTypes";
import axios from "axios";
import { APIKey, bodyURL } from "../../../constant";

export const setTvRecommendationRequest = () => {
  return {
    type: actionTypes.TV_RECOMMENDATION_REQUEST,
  };
};

export const setTvRecommendationSuccess = (tvRecommendation) => {
  return {
    type: actionTypes.TV_RECOMMENDATION_SUCCESS,
    tvRecommendation: tvRecommendation,
  };
};

export const setTvRecommendationFail = (error) => {
  return {
    type: actionTypes.TV_RECOMMENDATION_FAIL,
    error: error,
  };
};

export const fetchtvRecommendation = (tvID) => {
  return (dispatch) => {
    dispatch(setTvRecommendationRequest());
    return axios
      .get(`${bodyURL}tv/${tvID}/recommendations?api_key=${APIKey}`)
      .then((response) => {
        dispatch(setTvRecommendationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setTvRecommendationFail(error.message));
      });
  };
};
