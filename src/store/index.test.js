import rootReducer from "./index";

describe("rootReducer", () => {
  it("initializes the default state", () => {
    expect(rootReducer({}, {})).toEqual({
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
      trending: {
        trending: [],
        loading: false,
        error: "",
      },
      latestMovie: {
        latestMovie: [],
        loading: false,
        error: "",
      },
      latestTv: {
        latestTv: [],
        loading: false,
        error: "",
      },
      movieRecommendation: {
        movieRecommendation: [],
        loading: false,
        error: "",
      },
    });
  });
});
