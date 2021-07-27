import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const now = dayjs();

export const getFormatedMonth = () => now.format('MM');

export const getFormatedYear = () => now.format('YYYY');

export const getFormatedDate = (date) => date.format('YYYYMMDD');

export const getCurrentDate = () => getFormatedDate(now);

export const getDaysCurrentMonth = (month, year, data) => {
  const numberDaysCurrentMonth = dayjs(`${year}-${month}-01`).daysInMonth();
  let monthDays = new Array(numberDaysCurrentMonth);

  for (let index = 0; index < monthDays.length; index++) {
    const date = dayjs(`${year}-${month}-${index + 1}`);
    const element = findElement(data, getFormatedDate(date));
    const dayObj = {
      date: date,
      workHours: element?.work || { start: '', end: '' },
      lunchHours: element?.lunch || { start: '', end: '' },
    };
    monthDays[index] = dayObj;
  }
  return monthDays;
};

export const formatHour = (workedHours) => {
  let formatedHour = '';

  if (hasValidHoursRangeValues(workedHours)) {
    const hours = workedHours.hours() + (workedHours.days() * 24);
    const minutes = workedHours.minutes();

    if (hours === 0 && minutes === 0) {
      formatedHour = '0h';
    } else if (hours > 0 && minutes === 0) {
      formatedHour = `${hours}h`;
    } else if (hours === 0 && minutes > 0) {
      formatedHour = `${minutes}m`;
    } else {
      formatedHour = `${hours}h ${minutes}m`;
    }
  }

  return formatedHour;
};

const getHoursrangeValue = (range) => {
  const hoursStart = range?.start?.split(':')[0];
  const minutesStart = range?.start?.split(':')[1];

  const hoursEnd = range?.end?.split(':')[0];
  const minutesEnd = range?.end?.split(':')[1];

  let totalTime;
  if (hoursStart && hoursEnd) {
    const start = dayjs.duration({ hours: hoursStart, minutes: minutesStart });
    const end = dayjs.duration({ hours: hoursEnd, minutes: minutesEnd });

    totalTime = end.subtract(start);
  }

  return totalTime;
};

export const calculateTotalWorkedHours = (hoursRangeWork, hoursRangeLunch) => {
  const workHoursrangeValue = getHoursrangeValue(hoursRangeWork);
  const lunchHoursrangeValue = getHoursrangeValue(hoursRangeLunch);
  const workedHours = workHoursrangeValue?.subtract(lunchHoursrangeValue);

  return workedHours;
};

export const hasValidHoursRangeValues = (range) => {
  return range && range.hours() >= 0 && range.minutes() >= 0;
};

export const createDuration = () => {
  return dayjs.duration({ hours: 0, minutes: 0 });
};

const findElement = (arr, value) => {
  let desired = undefined;

  arr?.forEach((element) => {
    if (element.date === value) {
      desired = element;
    }
  });

  return desired;
};
