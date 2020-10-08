import { combineReducers } from "redux";
import landingReducer from "./reducers/landingReducer/landingReducer";
import movieReducer from "./reducers/movieReducer/movieReducer";
import recommendationReducer from "./reducers/recommendationReducer/recommendationReducer";

export default combineReducers({
  movies: movieReducer,
  landing: landingReducer,
  recommendation: recommendationReducer,
});
