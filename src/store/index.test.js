import rootReducer from "./index";

describe("rootReducer", () => {
  it("initializes the default state", () => {
    expect(rootReducer({}, {})).toEqual({
      landing: {
        landingLoading: false,
        trending: [],
        nowMovie: [],
        nowTV: [],
        landingError: [],
      },
      recommendation: {
        movieRecommendation: {},
        TVRecommendation: {},
        recommendationLoading: false,
        recommendationError: "",
      },
      moviesList: {
        movies: [],
        loading: false,
        error: "",
      },
      movieDetail: {
        movie: [],
        loading: false,
        error: "",
      },
      tvDetail: {
        tv: [],
        loading: false,
        error: "",
      },
    });
  });
});
