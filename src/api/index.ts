import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

export const setupInterceptors = (handleError: (message: string) => void, token: string) => {
  api.interceptors.request.clear();
  api.interceptors.response.clear();

  api.interceptors.request.use(
    (req) => {
      req.headers.Authorization = `Bearer ${token}`;

      return req;
    },
    (e) => e,
  );
  api.interceptors.response.use(
    (res) => res,
    (e) => {
      handleError(e);
      return e;
    },
  );
};
