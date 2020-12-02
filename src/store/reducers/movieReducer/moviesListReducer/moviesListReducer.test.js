import moviesListReducer from "./moviesListReducer";
import * as actionTypes from "../../../actions/actionTypes";

import { movieMock } from "../../../../test/mocks/mocks";

describe("moviesListReducer", () => {
  const initialState = {
    movies: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(moviesListReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `moviesListRequest` and set loading to true", () => {
    expect(
      moviesListReducer(initialState, { type: actionTypes.MOVIES_LIST_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `moviesListSuccess` and sets data to state", () => {
    const movies = movieMock;
    expect(
      moviesListReducer(initialState, {
        type: actionTypes.MOVIES_LIST_SUCCESS,
        movies,
      })
    ).toEqual({
      ...initialState,
      movies: movies,
      loading: false,
    });
  });

  it("calls `moviesListFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      moviesListReducer(initialState, {
        type: actionTypes.MOVIES_LIST_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });

  it("calls `moviesListReset` and resets the initial state", () => {
    expect(
      moviesListReducer(initialState, { type: actionTypes.MOVIES_LIST_RESET })
    ).toEqual({
      ...initialState,
      movies: [],
      loading: false,
      error: "",
    });
  });
});
