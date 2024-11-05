import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_BASE_URL;

const serverURL = `${serverUrl}/api`;

export const serverAPI = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});

serverAPI.interceptors.response.use(
  res => res,

  async e => {
    if (e.response.status === 401) {
      try {
        await serverAPI.post('/users/refresh');

        return serverAPI(e.config);
      } catch (refreshError) {
        // if (refreshError.status === 403) {

        // }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(e);
  }
);
