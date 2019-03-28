import * as actionTypes from "../types";
let initialState = {
  login_loading: false,
  user: null
};
export function login(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        login_loading: action.payload
      };
    case actionTypes.SAVE_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
