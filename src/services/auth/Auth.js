import api from '../api';
import Cookies from 'js-cookie';

export const signUp = async (body) => {
  try {
    const data = await api.post('/signup', body);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (body) => {
  try {
    const {data} = await api.post('/login', body);
    Cookies.set('auth_token', data.token);

    return data;
  } catch (error) {
    const message =
      error?.response?.data?.error || 'Could not log in, try again.';
    return { error: message };
  }
};
