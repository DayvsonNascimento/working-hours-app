import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as weekDay from 'dayjs/plugin/weekday';
import * as weekOfYear from 'dayjs/plugin/weekOfYear';
import LogCard from '../Cards/LogCard/LogCard';

import {
  Container,
  Table,
  TableHeader,
  TableRow,
  HeaderCell,
  Body,
} from './styles';

const LogTable = () => {
  const [daysOfMonth, setDaysOfMonth] = useState(null);

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

  useEffect(() => {
    dayjs.extend(weekDay);
    dayjs.extend(weekOfYear);

    const now = dayjs();
    const currentMonth = now.format('M');
    const currentYear = now.format('YYYY');

    getDaysCurrentMonth(currentMonth, currentYear);
  }, []);

  return (
    <Container>
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
