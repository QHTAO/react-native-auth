import AuthStorage from "../utils/authStorage";
import request, { setClientToken } from "../utils/request";

import { loginService as loginServiceApp } from "../utils/api";
export const LOGIN_APP = "LOGIN_APP";
export const LOGOUT = "LOGOUT";
export const storage = new AuthStorage();

export function logout() {
  return async (dispatch) => {
    await storage.removeAccessToken();
    dispatch({ type: LOGOUT });
  };
}

export const loginService = ({ username, password }) => {
  return async (dispatch) => {
    //     //1.设置http:token,
    //     //2.将token存储到本地
    //     //3.更新redux中的登录状态
    const res = await loginServiceApp({ username, password });
    setClientToken(res.data.token);
    storage.setAccessToken(res.data.token);
    dispatch(loginApp(res.data.token));
  };
};

export const loginApp = (token) => ({ type: LOGIN_APP, token });
