import axios from "axios";

let request = axios.create({
  baseURL: "http://192.168.12.150:3000/",
  timeout: 10000,
});

export const setClientToken = (token) => {
  request.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default request;
