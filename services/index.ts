import axios from "axios";
import { getData, setData } from "../components/helpers";

const AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = getData("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = await error.config;

    if (error && error.response && error.response.status === 401) {
      return Promise.reject({ message: "error" });
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const currentToken = await getData("token");
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`;
      return AxiosInstance.get(url, {
        headers: {
          "Refresh-Token": currentToken,
        },
      }).then((res) => {
        if (
          res.status === 200 &&
          originalRequest.url.includes("/account/keys/regenerate")
        ) {
          setData("token", res.data.secreteKey);
        }
        if (res.status === 200) {
          setData("token", res.data);
          AxiosInstance.defaults.headers.common.Authorization = `Bearer ${getData(
            "token"
          )}`;
          return AxiosInstance.get(originalRequest.url, originalRequest.params);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
