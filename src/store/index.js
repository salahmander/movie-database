import { combineReducers } from "redux";

import latestMovieReducer from "./reducers/latestMovieReducer/latestMovieReducer";
import latestTvReducer from "./reducers/latestTvReducer/latestTvReducer";
import movieDetailReducer from "./reducers/movieReducer/movieDetailReducer/movieDetailReducer";
import movieRecommendationReducer from "./reducers/movieRecommendationReducer/movieRecommendationReducer";
import moviesListReducer from "./reducers/movieReducer/moviesListReducer/moviesListReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";
import trendingReducer from "./reducers/trendingReducer/trendingReducer";
import tvDetailReducer from "./reducers/movieReducer/tvDetailReducer/tvDetailReducer";
import tvRecommendationReducer from "./reducers/tvRecommendationReducer/tvRecommendationReducer";

export default combineReducers({
  latestMovie: latestMovieReducer,
  latestTv: latestTvReducer,
  movieDetail: movieDetailReducer,
  movieRecommendation: movieRecommendationReducer,
  moviesList: moviesListReducer,
  recommendation: recommendationReducer,
  trending: trendingReducer,
  tvDetail: tvDetailReducer,
  tvRecommendation: tvRecommendationReducer,
});
