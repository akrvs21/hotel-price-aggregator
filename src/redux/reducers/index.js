import { combineReducers } from "redux";
import saveToFavorites from "./saveToFavorites";

export default combineReducers({
  favorites: saveToFavorites,
});
