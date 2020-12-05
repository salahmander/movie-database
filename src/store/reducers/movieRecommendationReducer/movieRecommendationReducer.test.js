import movieRecommendationReducer from "./movieRecommendationReducer";
import * as actionTypes from "../../actions/actionTypes";

import { movieRecommendationMock } from "../../../test/mocks/mocks";

describe("movieRecommendationReducer", () => {
  const initialState = {
    movieRecommendation: [],
    loading: false,
    error: "",
  };

  it("returns the initial state", () => {
    expect(movieRecommendationReducer(undefined, {})).toEqual(initialState);
  });

  it("calls `movieRecommendationRequest` and set loading to true", () => {
    expect(
      movieRecommendationReducer(initialState, {
        type: actionTypes.MOVIE_RECOMMENDATION_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("calls `movieRecommendationSuccess` and sets data to state", () => {
    const movieRecommendation = movieRecommendationMock;
    expect(
      movieRecommendationReducer(initialState, {
        type: actionTypes.MOVIE_RECOMMENDATION_SUCCESS,
        movieRecommendation,
      })
    ).toEqual({
      ...initialState,
      movieRecommendation: movieRecommendation,
      loading: false,
    });
  });

  it("calls `movieRecommendationFail` and sets the error message", () => {
    const error = "Request failed with status code 404";
    expect(
      movieRecommendationReducer(initialState, {
        type: actionTypes.MOVIE_RECOMMENDATION_FAIL,
        error,
      })
    ).toEqual({
      ...initialState,
      error: error,
      loading: false,
    });
  });

  it("calls `movieRecommendationReset` and resets the initial state", () => {
    expect(
      movieRecommendationReducer(initialState, { type: actionTypes.MOVIE_RECOMMENDATION_RESET })
    ).toEqual({
      ...initialState,
      movieRecommendation: [],
      loading: false,
      error: "",
    });
  });
});
