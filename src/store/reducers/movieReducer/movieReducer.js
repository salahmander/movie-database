import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../../utility/utility";

const initialState = {
  name: "",
  movies: [],
  movieInfo: [],
  TVInfo: [],
  movieLoading: false,
  movieError: "",
};

const setName = (state, action) => {
  return updateObject(state, {
    name: action.name,
    movieLoading: false,
  });
};

const startMovieLoading = (state, action) => {
  return updateObject(state, {
    movieLoading: true,
  });
};

const stopMovieLoading = (state, action) => {
  return updateObject(state, {
    movieLoading: false,
  });
};

const fetchMovies = (state, action) => {
  return updateObject(state, {
    movies: action.movies,
    movieLoading: false,
  });
};

const fetchMovieInfo = (state, action) => {
  return updateObject(state, {
    movieInfo: action.movieInfo,
    movieLoading: false,
  });
};

const fetchTVInfo = (state, action) => {
  return updateObject(state, {
    TVInfo: action.TVInfo,
    movieLoading: false,
  });
};

const setError = (state, action) => {
  return updateObject(state, {
    movieError: action.movieError,
    movieLoading: false,
  });
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return setName(state, action);
    case actionTypes.FETCH_MOVIES:
      return fetchMovies(state, action);
    case actionTypes.FETCH_MOVIE_INFO:
      return fetchMovieInfo(state, action);
    case actionTypes.FETCH_TV_INFO:
      return fetchTVInfo(state, action);
    case actionTypes.MOVIE_ERROR:
      return setError(state, action);
    case actionTypes.START_MOVIE_LOADING:
      return startMovieLoading(state, action);
    case actionTypes.STOP_MOVIE_LOADING:
      return stopMovieLoading(state, action);
    default:
      return state;
  }
};

export default movieReducer;
