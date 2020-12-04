import tvRecommendationReducer from "./tvRecommendationReducer";
import * as actionTypes from "../../actions/actionTypes";

import { TVRecommendationMock } from "../../../test/mocks/mocks";

describe("tvRecommendationReducer", () => {
  const initialState = {
    tvRecommendation: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(tvRecommendationReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `tvRecommendationRequest` and set loading to true", () => {
    expect(
      tvRecommendationReducer(initialState, {
        type: actionTypes.TV_RECOMMENDATION_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `tvRecommendationSuccess` and sets data to state", () => {
    const tvRecommendation = TVRecommendationMock;
    expect(
      tvRecommendationReducer(initialState, {
        type: actionTypes.TV_RECOMMENDATION_SUCCESS,
        tvRecommendation,
      })
    ).toEqual({
      ...initialState,
      tvRecommendation: tvRecommendation,
      loading: false,
    });
  });

  it("calls `tvRecommendationFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      tvRecommendationReducer(initialState, {
        type: actionTypes.TV_RECOMMENDATION_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });

  it("calls `tvRecommendationReset` and resets the initial state", () => {
    expect(
      tvRecommendationReducer(initialState, { type: actionTypes.TV_RECOMMENDATION_RESET })
    ).toEqual({
      ...initialState,
      tvRecommendation: [],
      loading: false,
      error: "",
    });
  });
});
