import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const params = {
  baseURL: apiUrl,
};

const api = axios.create(params);

export default api;
