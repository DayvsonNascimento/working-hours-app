import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = process.env.REACT_APP_API_URL;
const apiToken = `Bearer ${Cookies.get('auth_token')}`;

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
