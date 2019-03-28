import { Toast } from "native-base";
import * as actionTypes from "../types/login";
import { login as doLogin } from "../services/user";

export function login_status(v) {
  return {
    type: actionTypes.LOGIN_LOADING,
    payload: v
  };
}
export function save_user(v) {
  return {
    type: actionTypes.SAVE_USER,
    payload: v
  };
}
export function save_token(v) {
  return {
    type: actionTypes.SAVE_TOKEN,
    payload: v
  };
}

export const login = d => (dispatch, getState) => {
  dispatch(login_status(true));
  return doLogin(d).then(r => {
    // console.log(r);
    if (r.status === 200) {
      dispatch(save_user(r.body.user));
      dispatch(save_token(r.body.mysess));
      // async () => await AsyncStorage.setItem("user", r.body.user);
    } else {
      Toast.show({
        text: r.msg,
        buttonText: "Okay",
        position: "bottom",
        style: { marginBottom: 150, elevation: -1 }
      });
      console.log(r.msg || "系统错误");
    }
    dispatch(login_status(false));
    return r;
  });
};
