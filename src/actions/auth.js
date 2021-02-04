import AuthStorage from "../utils/authStorage";

export const storage = new AuthStorage();

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function logout() {
  return async (dispatch) => {
    await storage.removeAccessToken();
    dispatch({ type: LOGOUT });
  };
}

export const login = () => {
  return async (dispatch) => {
    await storage.setAccessToken("myToken");
    dispatch({ type: LOGIN });
  };
};
