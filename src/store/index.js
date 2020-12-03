import { combineReducers } from "redux";
import landingReducer from "./reducers/landingReducer/landingReducer";
import movieReducer from "./reducers/movieReducer/movieReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";

import moviesListReducer from "./reducers/movieReducer/moviesListReducer/moviesListReducer";
import movieDetailReducer from "./reducers/movieReducer/movieDetailReducer/movieDetailReducer";

export default combineReducers({
  movies: movieReducer,
  landing: landingReducer,
  recommendation: recommendationReducer,
  moviesList: moviesListReducer,
  movieDetail: movieDetailReducer,
});
