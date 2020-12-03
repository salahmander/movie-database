import movieDetailReducer from "./movieDetailReducer";
import * as actionTypes from "../../../actions/actionTypes";

import { movieInfoMock } from "../../../../test/mocks/mocks";

describe("movieDetailReducer", () => {
  const initialState = {
    movie: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(movieDetailReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `movieDetailRequest` and set loading to true", () => {
    expect(
      movieDetailReducer(initialState, {
        type: actionTypes.MOVIE_DETAIL_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `movieDetailSuccess` and sets data to state", () => {
    const movie = movieInfoMock;
    expect(
      movieDetailReducer(initialState, {
        type: actionTypes.MOVIE_DETAIL_SUCCESS,
        movie,
      })
    ).toEqual({
      ...initialState,
      movie: movie,
      loading: false,
    });
  });

  it("calls `movieDetailFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      movieDetailReducer(initialState, {
        type: actionTypes.MOVIE_DETAIL_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });

  it("calls `movieDetailReset` and resets the initial state", () => {
    expect(
      movieDetailReducer(initialState, { type: actionTypes.MOVIE_DETAIL_RESET })
    ).toEqual({
      ...initialState,
      movie: [],
      loading: false,
      error: "",
    });
  });
});
