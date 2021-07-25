import api from '../api';

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
      const data = await api.post('/login', body);
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
