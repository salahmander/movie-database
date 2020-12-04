import { combineReducers } from "redux";

import latestMovieReducer from "./reducers/latestMovieReducer/latestMovieReducer";
import latestTvReducer from "./reducers/latestTvReducer/latestTvReducer";
import movieDetailReducer from "./reducers/movieReducer/movieDetailReducer/movieDetailReducer";
import moviesListReducer from "./reducers/movieReducer/moviesListReducer/moviesListReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";
import trendingReducer from "./reducers/trendingReducer/trendingReducer";
import tvDetailReducer from "./reducers/movieReducer/tvDetailReducer/tvDetailReducer";

export default combineReducers({
  latestMovie: latestMovieReducer,
  latestTv: latestTvReducer,
  movieDetail: movieDetailReducer,
  moviesList: moviesListReducer,
  recommendation: recommendationReducer,
  trending: trendingReducer,
  tvDetail: tvDetailReducer,
});
