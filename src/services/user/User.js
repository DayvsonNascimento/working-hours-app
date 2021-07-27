import api from '../api';

export const saveWorkDaySchedule = async (body) => {
  try {
    const data = await api.post('/workSchedule', body);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loadWorkSchedule = async (params) => {
  try {
    const { data } = await api.get('/workSchedule', { params: params });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBasicInfo = async () => {
  try {
    const { data } = await api.get('/basicInfo');

    return data;
  } catch (error) {
    console.log(error);
  }

}
