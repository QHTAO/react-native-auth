import request from "./request";

export function login({ username, password }) {
  return request.post("​/auth​/local", { username, password });
}
