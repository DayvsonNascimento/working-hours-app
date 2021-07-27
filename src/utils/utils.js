import { MONTHS } from './constants';

export const isEmpty = (object) => {
  return Object.values(object).every((el) => el === '' || el === undefined);
};

export const hasEmptyField = (object) => {
  return Object.values(object).some((el) => el === '' || el === undefined);
};

export const getMonthFullName = (month) => {
  return MONTHS[month - 1];
};
