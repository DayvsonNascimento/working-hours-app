import LogCard from '../Cards/LogCard/LogCard';
import { MONTHS } from '../../utils/constants';
import * as API from '../../services/user/User';

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

const LogTable = ({ workLogs, month, year, loadWorkLogs }) => {
  const handleMonthChange = (event) => {
    const selectedMonth = MONTHS.indexOf(event.target.value) + 1;

    loadWorkLogs(selectedMonth, year);
  };

  const getMonthFullName = () => {
    return MONTHS[month - 1];
  };

  const submitWorkLog = async (date, workHours, lunchHours) => {
    const workDaySchedule = {
      date: date,
      workHours: workHours,
      lunchHours: lunchHours,
    };

    await API.saveWorkDaySchedule(workDaySchedule);
    loadWorkLogs(month, year);
  };

  return (
    <Container>
      <SelectContainer>
        <Select>
          <Option value="2021">2021</Option>
        </Select>
        <Select value={getMonthFullName()} onChange={handleMonthChange}>
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
          {workLogs?.map((day, index) => (
            <LogCard key={index} day={day} submitWorkLog={submitWorkLog} />
          ))}
        </Body>
      </Table>
    </Container>
  );
};

export default LogTable;
