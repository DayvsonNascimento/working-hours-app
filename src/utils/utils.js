export const isEmpty = (object) => {
  return Object.values(object).every((el) => el === '' || el === undefined);
};
