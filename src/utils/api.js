import request from "./request";

export function loginService({ username, password }) {
  return request
    .post("/auth/local", { username, password })
    .then((res) => res.data);
}
