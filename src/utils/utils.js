export const isEmpty = (object) => {
  return Object.values(object).every((el) => el === '' || el === undefined);
};

export const hasEmptyField = (object) => {
  return Object.values(object).some((el) => el === '' || el === undefined);
};

export const calculateTotalWorkedHours = (hoursRangeWork, hoursRangeLunch) => {
  const workHoursrangeValue = getHoursrangeValue(hoursRangeWork);
  const lunchHoursrangeValue = getHoursrangeValue(hoursRangeLunch) || 0;
  const workedHours = workHoursrangeValue - lunchHoursrangeValue;

  return workedHours;
};

export const formatHour = (workedHours) => {
  const formatedHour = hasValidHoursRangeValues(workedHours)
    ? (workedHours / 100).toString() + 'h'
    : '';

  return formatedHour;
};

const getHoursrangeValue = (range) => {
  const startTime = parseInt(range?.start?.replace(':', ''));
  const endTime = parseInt(range?.end?.replace(':', ''));
  const totalTime = endTime - startTime;

  return totalTime;
};

export const hasValidHoursRangeValues = (workedHours) => {
  return workedHours !== NaN && workedHours >= 0;
};
