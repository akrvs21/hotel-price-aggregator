import { SAVE_HOTEL } from "../actions/types";

const initialState = {
  favoriteList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_HOTEL:
      console.log("dispatch fired");
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    default:
      return state;
  }
}
