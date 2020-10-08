import recommendationReducer from "./recommendationReducer";
import * as actionTypes from "../../actions/actionTypes";

import {
  TVRecommendationMock,
  movieRecommendation,
  movieRecommendationMock,
} from "../../../test/mocks/mocks";

describe("recommendationReducer", () => {
  const initialState = {
    movieRecommendation: {},
    TVRecommendation: {},
    recommendationLoading: false,
    recommendationError: "",
  };

  it("returns the initial state", () => {
    expect(recommendationReducer(undefined, {})).toEqual(initialState);
  });

  it("sets `recommendationLoading` to true", () => {
    expect(
      recommendationReducer(initialState, {
        type: actionTypes.START_RECOMMENDATION_LOADING,
      })
    ).toEqual({ ...initialState, recommendationLoading: true });
  });

  it("sets `recommendationLoading` to false", () => {
    expect(
      recommendationReducer(initialState, {
        type: actionTypes.STOP_RECOMMENDATION_LOADING,
      })
    ).toEqual({ ...initialState, recommendationLoading: false });
  });

  it("fetches and sets `movieRecommendation` data", () => {
    const movieRecommendation = movieRecommendationMock;
    expect(
      recommendationReducer(initialState, {
        type: actionTypes.FETCH_MOVIE_RECOMMENDATION,
        movieRecommendation,
      })
    ).toEqual({
      ...initialState,
      movieRecommendation: movieRecommendation,
      recommendationLoading: false,
    });
  });

  it("fetches and sets `TVRecommendation` data", () => {
    const TVRecommendation = TVRecommendationMock;
    expect(
      recommendationReducer(initialState, {
        type: actionTypes.FETCH_TV_RECOMMENDATION,
        TVRecommendation,
      })
    ).toEqual({
      ...initialState,
      TVRecommendation: TVRecommendation,
      recommendationLoading: false,
    });
  });

  it("sets the error message", () => {
    const recommendationError = "Request failed with status code 404";
    expect(
      recommendationReducer(initialState, {
        type: actionTypes.RECOMMEDNATION_ERROR,
        recommendationError,
      })
    ).toEqual({
      ...initialState,
      recommendationError: recommendationError,
      recommendationLoading: false,
    });
  });
});
