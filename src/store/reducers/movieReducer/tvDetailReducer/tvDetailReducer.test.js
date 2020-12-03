import tvDetailReducer from "./tvDetailReducer";
import * as actionTypes from "../../../actions/actionTypes";

import { tvInfoMock } from "../../../../test/mocks/mocks";

describe("tvDetailReducer", () => {
  const initialState = {
    tv: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(tvDetailReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `tvDetailRequest` and set loading to true", () => {
    expect(
      tvDetailReducer(initialState, {
        type: actionTypes.TV_DETAIL_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `tvDetailSuccess` and sets data to state", () => {
    const tv = tvInfoMock;
    expect(
      tvDetailReducer(initialState, {
        type: actionTypes.TV_DETAIL_SUCCESS,
        tv,
      })
    ).toEqual({
      ...initialState,
      tv: tv,
      loading: false,
    });
  });

  it("calls `tvDetailFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      tvDetailReducer(initialState, {
        type: actionTypes.TV_DETAIL_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });

  it("calls `tvDetailReset` and resets the initial state", () => {
    expect(
      tvDetailReducer(initialState, { type: actionTypes.TV_DETAIL_RESET })
    ).toEqual({
      ...initialState,
      tv: [],
      loading: false,
      error: "",
    });
  });
});
