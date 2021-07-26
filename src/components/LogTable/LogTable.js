import { useEffect, useState } from 'react';
import * as util from '../../utils/dayjsUtils';
import LogCard from '../Cards/LogCard/LogCard';
import * as API from '../../services/user/User';
import { MONTHS } from '../../utils/constants';

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

  const loadWorkSchedule = async (month, year) => {
    const data = await API.loadWorkSchedule({
      month: month,
      email: 'user@gmail.com',
    });

    const daysData = util.getDaysCurrentMonth(month, year, data);
    setDaysOfMonth(daysData);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = +MONTHS.indexOf(event.target.value) + 1;

    loadWorkSchedule(selectedMonth, currentYear);
    setcurrentMonth(selectedMonth);
  };

  const getCurrentMonthName = () => {
    return MONTHS[currentMonth - 1];
  };

  useEffect(() => {
    const month = util.getFormatedMonth();
    const year = util.getFormatedYear();

    loadWorkSchedule(month, year);
    setcurrentMonth(month);
    setcurrentYear(year);
  }, []);

  return (
    <Container>
      <SelectContainer>
        <Select>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
        </Select>
        <Select value={getCurrentMonthName()} onChange={handleMonthChange}>
          {MONTHS.map((value, index) => (
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
