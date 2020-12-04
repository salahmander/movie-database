import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  latestTv: [],
  loading: false,
  error: "",
};

export const latestTvRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const latestTvSuccess = (state, action) => {
  return {
    ...state,
    latestTv: action.latestTv,
    loading: false,
  };
};

export const latestTvFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const latestTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LATEST_TV_REQUEST:
      return latestTvRequest(state, action);
    case actionTypes.LATEST_TV_SUCCESS:
      return latestTvSuccess(state, action);
    case actionTypes.LATEST_TV_FAIL:
      return latestTvFail(state, action);
    default:
      return state;
  }
};

export default latestTvReducer;
