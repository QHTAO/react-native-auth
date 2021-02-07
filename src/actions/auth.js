import AuthStorage from "../utils/authStorage";
import request, { setClientToken } from "../utils/request";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const storage = new AuthStorage();

export function logout() {
  return async (dispatch) => {
    await storage.removeAccessToken();
    dispatch({ type: LOGOUT });
  };
}

export const login = ({ username, password }) => {
  return async (dispatch) => {
    console.log({ username, password });
    // request
    //   .post("/auth/local/register", { username, password })
    //   .then(function (result) {
    //     //1.设置http:token,
    //     //2.将token存储到本地
    //     //3.更新redux中的登录状态
    //     setClientToken(result.token);
    //     storage.setAccessToken("myToken");
    //     dispatch({ type: LOGIN });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
};
