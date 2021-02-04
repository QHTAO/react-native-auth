import { LOGIN, LOGOUT } from "../actions/auth";
function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { isAuth: true });
    case LOGOUT:
      return Object.assign({}, state, { isAuth: false });
    default:
      return Object.assign({}, state);
  }
}

export default auth;
