import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as weekDay from 'dayjs/plugin/weekday';
import * as weekOfYear from 'dayjs/plugin/weekOfYear';
import LogCard from '../Cards/LogCard/LogCard';

import {
  Container,
  SelectContainer,
  Select,
  Option,
  Table,
  TableHeader,
  TableRow,
  HeaderCell,
  Body,
} from './styles';

const LogTable = () => {
  const [currentMonth, setcurrentMonth] = useState('');
  const [currentYear, setcurrentYear] = useState('');
  const [daysOfMonth, setDaysOfMonth] = useState(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getDaysCurrentMonth = (month, year) => {
    const numberDaysCurrentMonth = dayjs(`${year}-${month}-01`).daysInMonth();
    let monthDays = new Array(numberDaysCurrentMonth);

    for (let index = 0; index < monthDays.length; index++) {
      const date = dayjs(`${year}-${month}-${index + 1}`);
      const dayObj = {
        date: date,
      };
      monthDays[index] = dayObj;
    }

    setDaysOfMonth(monthDays);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    getDaysCurrentMonth(selectedMonth, currentYear);
    setcurrentMonth(selectedMonth);
  };

  useEffect(() => {
    dayjs.extend(weekDay);
    dayjs.extend(weekOfYear);

    const now = dayjs();
    const month = now.format('MMMM');
    const year = now.format('YYYY');

    getDaysCurrentMonth(month, year);
    setcurrentMonth(month);
    setcurrentYear(year);
  }, []);

  return (
    <Container>
      <SelectContainer>
        <Select>
          <option value="2021">2021</option>
          <option value="2021">2022</option>
        </Select>
        <Select value={currentMonth} onChange={handleMonthChange}>
          {months.map((value, index) => (
            <Option key={index} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </SelectContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCell>Date</HeaderCell>
            <HeaderCell>Hours range</HeaderCell>
            <HeaderCell>Total</HeaderCell>
          </TableRow>
        </TableHeader>
        <Body>
          {daysOfMonth?.map((day, index) => (
            <LogCard key={index} day={day} />
          ))}
        </Body>
      </Table>
    </Container>
  );
};

export default LogTable;
