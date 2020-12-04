import trendingReducer from "./trendingReducer";
import * as actionTypes from "../../actions/actionTypes";
import { trendingMock } from "../../../test/mocks/mocks";

describe("trending reducer", () => {
  const initialState = {
    trending: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(trendingReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `trendingRequest` and set loading to true", () => {
    expect(
      trendingReducer(initialState, {
        type: actionTypes.TRENDING_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `trendingSuccess` and sets data to state", () => {
    const trending = trendingMock;
    expect(
      trendingReducer(initialState, {
        type: actionTypes.TRENDING_SUCCESS,
        trending,
      })
    ).toEqual({
      ...initialState,
      trending: trending,
      loading: false,
    });
  });

  it("calls `trendingFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      trendingReducer(initialState, {
        type: actionTypes.TRENDING_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });

});
