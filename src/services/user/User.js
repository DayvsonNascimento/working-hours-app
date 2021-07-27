import api from '../api';
import * as notificationsUtil from '../../utils/notificationsUtil';
import { removeToken } from '../../utils/authCookieUtil';

export const saveWorkDaySchedule = async (body) => {
  try {
    const data = await api.post('/workSchedule', body);

    notificationsUtil.createSuccessNotification({
      message: 'Data saved successfully!',
    });

    return data;
  } catch (error) {
    const message =
      error?.response?.data?.error || 'Could not save data, please try again.';
    notificationsUtil.createDangerNotification({
      message: message,
    });
  }
};

export const getBasicInfo = async () => {
  try {
    const { data } = await api.get('/basicInfo');

    return data;
  } catch (error) {
    const statusCode = error?.response?.status;

    if (statusCode === 403) {
      removeToken();
    }
  }
};

export const loadWorkSchedule = async (params) => {
  try {
    const { data } = await api.get('/workSchedule', { params: params });

    return data;
  } catch (error) {
    const message =
      error?.response?.data?.error || 'Could not load data, please reload the page.';
    notificationsUtil.createDangerNotification({
      message: message,
    });
  }
};
