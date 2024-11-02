import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_BASE_URL;

const serverURL = `${serverUrl}/api`;

export const serverAPI = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});
