import latestTvReducer from "./latestTvReducer";
import * as actionTypes from "../../actions/actionTypes";
import { nowTVMock } from "../../../test/mocks/mocks";

describe("latestTv reducer", () => {
  const initialState = {
    latestTv: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(latestTvReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `latestTvRequest` and set loading to true", () => {
    expect(
      latestTvReducer(initialState, {
        type: actionTypes.LATEST_TV_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `latestTvSuccss` and sets data to state", () => {
    const latestTv = nowTVMock;
    expect(
      latestTvReducer(initialState, {
        type: actionTypes.LATEST_TV_SUCCESS,
        latestTv,
      })
    ).toEqual({
      ...initialState,
      latestTv: latestTv,
      loading: false,
    });
  });

  it("calls `latestTvFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      latestTvReducer(initialState, {
        type: actionTypes.LATEST_TV_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });
});
