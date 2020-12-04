import { combineReducers } from "redux";

import landingReducer from "./reducers/landingReducer/landingReducer";
import latestMovieReducer from "./reducers/latestMovieReducer/latestMovieReducer";
import movieDetailReducer from "./reducers/movieReducer/movieDetailReducer/movieDetailReducer";
import moviesListReducer from "./reducers/movieReducer/moviesListReducer/moviesListReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";
import trendingReducer from "./reducers/trendingReducer/trendingReducer";
import tvDetailReducer from "./reducers/movieReducer/tvDetailReducer/tvDetailReducer";

export default combineReducers({
  landing: landingReducer,
  latestMovie: latestMovieReducer,
  movieDetail: movieDetailReducer,
  moviesList: moviesListReducer,
  recommendation: recommendationReducer,
  trending: trendingReducer,
  tvDetail: tvDetailReducer,
});
