import latestMovieReducer from "./latestMovieReducer";
import * as actionTypes from "../../actions/actionTypes";
import { nowMovieMock } from "../../../test/mocks/mocks";

describe("latestMovie reducer", () => {
  const initialState = {
    latestMovie: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(latestMovieReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `latestMovieRequest` and set loading to true", () => {
    expect(
      latestMovieReducer(initialState, {
        type: actionTypes.LATEST_MOVIE_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `latestMovieSuccess` and sets data to state", () => {
    const latestMovie = nowMovieMock;
    expect(
      latestMovieReducer(initialState, {
        type: actionTypes.LATEST_MOVIE_SUCCESS,
        latestMovie,
      })
    ).toEqual({
      ...initialState,
      latestMovie: latestMovie,
      loading: false,
    });
  });

  it("calls `latestMovieFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      latestMovieReducer(initialState, {
        type: actionTypes.LATEST_MOVIE_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });
});
