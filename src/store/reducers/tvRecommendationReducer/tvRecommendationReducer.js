import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  tvRecommendation: [],
  loading: false,
  error: "",
};

export const tvRecommendationRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const tvRecommendationSuccess = (state, action) => {
  return {
    ...state,
    tvRecommendation: action.tvRecommendation,
    loading: false,
  };
};

export const tvRecommendationFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

export const tvRecommendationReset = (state, action) => {
  return {
    ...state,
    tvRecommendation: [],
    loading: false,
    error: "",
  };
};

const tvRecommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TV_RECOMMENDATION_REQUEST:
      return tvRecommendationRequest(state, action);
    case actionTypes.TV_RECOMMENDATION_SUCCESS:
      return tvRecommendationSuccess(state, action);
    case actionTypes.TV_RECOMMENDATION_FAIL:
      return tvRecommendationFail(state, action);
    case actionTypes.TV_RECOMMENDATION_RESET:
      return tvRecommendationReset(state, action);
    default:
      return state;
  }
};

export default tvRecommendationReducer;
