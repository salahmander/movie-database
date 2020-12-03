import { combineReducers } from "redux";

import landingReducer from "./reducers/landingReducer/landingReducer";
import movieDetailReducer from "./reducers/movieReducer/movieDetailReducer/movieDetailReducer";
import moviesListReducer from "./reducers/movieReducer/moviesListReducer/moviesListReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";
import tvDetailReducer from "./reducers/movieReducer/tvDetailReducer/tvDetailReducer";

export default combineReducers({
  landing: landingReducer,
  movieDetail: movieDetailReducer,
  moviesList: moviesListReducer,
  recommendation: recommendationReducer,
  tvDetail: tvDetailReducer,
});
