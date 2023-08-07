import axios from "axios";

export const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// set authorization token

// refresh token interceptor
Api.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 401) {
      // call refreshtoken
    }

    return Promise.reject(error.message);
  },
);
