import { combineReducers } from "redux";
import landingReducer from "./reducers/landingReducer/landingReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";

import moviesListReducer from "./reducers/movieReducer/moviesListReducer/moviesListReducer";
import movieDetailReducer from "./reducers/movieReducer/movieDetailReducer/movieDetailReducer";
import tvDetailReducer from "./reducers/movieReducer/tvDetailReducer/tvDetailReducer";

export default combineReducers({
  landing: landingReducer,
  recommendation: recommendationReducer,
  moviesList: moviesListReducer,
  movieDetail: movieDetailReducer,
  tvDetail: tvDetailReducer,
});
