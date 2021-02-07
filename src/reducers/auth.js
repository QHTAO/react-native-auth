import { LOGIN_APP, LOGOUT } from "../actions/auth";
function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN_APP:
      return Object.assign({}, state, { isAuth: true });
    case LOGOUT:
      return Object.assign({}, state, { isAuth: false });
    default:
      return Object.assign({}, state);
  }
}

export default auth;
