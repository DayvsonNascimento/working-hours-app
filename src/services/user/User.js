import api from '../api';

export const saveWorkDaySchedule = async (body) => {
  try {
    const data = await api.post('/workSchedule', body);

    return data;
  } catch (error) {
    console.log(error);
  }
};
