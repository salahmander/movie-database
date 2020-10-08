import landingReducer from "./landingReducer";
import * as actionTypes from "../../actions/actionTypes";
import {
  trendingMock,
  nowMovieMock,
  nowTVMock,
} from "../../../test/mocks/mocks";

describe("landing reducer", () => {
  const initialState = {
    landingLoading: false,
    trending: [],
    nowMovie: [],
    nowTV: [],
    landingError: [],
  };

  it("returns the initial state", () => {
    expect(landingReducer(undefined, {})).toEqual(initialState);
  });

  it("sets `landingLoading` to true", () => {
    expect(
      landingReducer(initialState, { type: actionTypes.START_LANDING_LOADING })
    ).toEqual({
      ...initialState,
      landingLoading: true,
    });
  });

  it("sets `landingLoading` to false ", () => {
    expect(
      landingReducer(initialState, { type: actionTypes.STOP_LANDING_LOADING })
    ).toEqual({ ...initialState, landingLoading: false });
  });

  it("fetches and sets the `trending` data", () => {
    const trending = trendingMock;
    expect(
      landingReducer(initialState, {
        type: actionTypes.FETCH_TRENDING,
        trending,
      })
    ).toEqual({
      ...initialState,
      trending: trending,
    });
  });

  it("fetches and sets the `nowTV` data", () => {
    const nowTV = nowTVMock;
    expect(
      landingReducer(initialState, {
        type: actionTypes.FETCH_NOW_TV,
        nowTV,
      })
    ).toEqual({
      ...initialState,
      nowTV: nowTV,
    });
  });

  it("fetches and sets the `nowMovie` data", () => {
    const nowMovie = nowMovieMock;
    expect(
      landingReducer(initialState, {
        type: actionTypes.FETCH_NOW_MOVIE,
        nowMovie,
      })
    ).toEqual({
      ...initialState,
      nowMovie: nowMovie,
    });
  });

  it("sets the error message", () => {
    const landingError = "Request failed with status code 404";
    expect(
      landingReducer(initialState, {
        type: actionTypes.LANDING_ERROR,
        landingError,
      })
    ).toEqual({
      ...initialState,
      landingError: landingError,
    });
  });
});
