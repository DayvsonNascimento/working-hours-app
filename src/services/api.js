import axios from 'axios';
import { getToken } from '../utils/authCookieUtil';

const apiUrl = process.env.REACT_APP_API_URL;
const apiToken = `Bearer ${getToken()}`;

const params = {
  baseURL: apiUrl,
};

const api = axios.create(params);

api.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: apiToken,
      },
    };
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
