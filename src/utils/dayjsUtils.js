import dayjs from 'dayjs';

const now = dayjs();

export const getFormatedMonth = () => now.format('MM');

export const getFormatedYear = () => now.format('YYYY');

export const getDaysCurrentMonth = (month, year, data) => {
  const numberDaysCurrentMonth = dayjs(`${year}-${month}-01`).daysInMonth();
  let monthDays = new Array(numberDaysCurrentMonth);

  for (let index = 0; index < monthDays.length; index++) {
    const date = dayjs(`${year}-${month}-${index + 1}`);
    const element = findElement(data, date.format('YYYYMMDD'));
    const dayObj = {
      date: date,
      workHours: element?.work || { start: '', end: '' },
      lunchHours: element?.lunch || { start: '', end: '' },
    };
    monthDays[index] = dayObj;
  }
  return monthDays;
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
