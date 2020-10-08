import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../../utility/utility";

const initialState = {
  landingLoading: false,
  trending: [],
  nowMovie: [],
  nowTV: [],
  landingError: [],
};

const startLandingLoading = (state, action) => {
  return updateObject(state, {
    landingLoading: true,
  });
};

const stopLandingloading = (state, action) => {
  return updateObject(state, {
    landingLoading: false,
  });
};

const fetchTrending = (state, action) => {
  return updateObject(state, {
    trending: action.trending,
  });
};

const fetchNowTV = (state, action) => {
  return updateObject(state, {
    nowTV: action.nowTV,
  });
};

const fetchNowMovie = (state, action) => {
  return updateObject(state, {
    nowMovie: action.nowMovie,
  });
};

const setError = (state, action) => {
  return updateObject(state, {
    landingError: action.landingError,
    landingLoading: false,
  });
};

const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRENDING:
      return fetchTrending(state, action);
    case actionTypes.FETCH_NOW_MOVIE:
      return fetchNowMovie(state, action);
    case actionTypes.FETCH_NOW_TV:
      return fetchNowTV(state, action);
    case actionTypes.START_LANDING_LOADING:
      return startLandingLoading(state, action);
    case actionTypes.STOP_LANDING_LOADING:
      return stopLandingloading(state, action);
    case actionTypes.LANDING_ERROR:
      return setError(state, action);
    default:
      return state;
  }
};

export default landingReducer;
