import movieReducer from "./movieReducer";
import * as actionTypes from "../../actions/actionTypes";

import {
  movieMock,
  movieInfoMock,
  tvInfoMock,
} from "../../../test/mocks/mocks";

describe("movieReducer", () => {
  const initialState = {
    name: "",
    movies: [],
    movieInfo: [],
    TVInfo: [],
    movieLoading: false,
    movieError: "",
  };

  it("returns the initial state", () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it("sets the `name`", () => {
    const name = "Taken";
    expect(
      movieReducer(initialState, { type: actionTypes.SET_NAME, name })
    ).toEqual({
      ...initialState,
      name: name,
      movieLoading: false,
    });
  });

  it("sets `movieLoading` to true", () => {
    expect(
      movieReducer(initialState, { type: actionTypes.START_MOVIE_LOADING })
    ).toEqual({
      ...initialState,
      movieLoading: true,
    });
  });

  it("sets `movieLoading` to false", () => {
    expect(
      movieReducer(initialState, { type: actionTypes.STOP_MOVIE_LOADING })
    ).toEqual({
      ...initialState,
      movieLoading: false,
    });
  });

  it("fetches and sets `movies` data", () => {
    const movies = movieMock;
    expect(
      movieReducer(initialState, { type: actionTypes.FETCH_MOVIES, movies })
    ).toEqual({
      ...initialState,
      movies: movies,
      movieLoading: false,
    });
  });

  it("fetches and sets `movieInfo` data", () => {
    const movieInfo = movieInfoMock;
    expect(
      movieReducer(initialState, {
        type: actionTypes.FETCH_MOVIE_INFO,
        movieInfo,
      })
    ).toEqual({
      ...initialState,
      movieInfo: movieInfo,
      movieLoading: false,
    });
  });

  it("fetches and sets `tvInfo` data", () => {
    const TVInfo = tvInfoMock;
    expect(
      movieReducer(initialState, { type: actionTypes.FETCH_TV_INFO, TVInfo })
    ).toEqual({
      ...initialState,
      TVInfo: TVInfo,
      movieLoading: false,
    });
  });

  it("sets the error message", () => {
    const movieError = "Request failed with status code 404";
    expect(
      movieReducer(initialState, { type: actionTypes.MOVIE_ERROR, movieError})
    ).toEqual({
      ...initialState,
      movieError: movieError,
      movieLoading: false,
    });
  });
});
