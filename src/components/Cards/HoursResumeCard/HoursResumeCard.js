import { useEffect, useState } from 'react';
import * as util from '../../../utils/utils';
import * as dayjsUtil from '../../../utils/dayjsUtils';
import { EXPECTED_HOURS_DAY } from '../../../utils/constants';

import { Container, Text, Title } from './styles';

const HoursResumeCard = ({ workLogs }) => {
  const [workedHoursMonth, setWorkedHoursMonth] = useState(null);
  const [workedHoursDay, setWorkedHoursDay] = useState(null);

  const getWorkedHoursMonth = () => {
    let totalHours = 0;
    workLogs?.forEach((element) => {
      const dayRangeSum =
        util.calculateTotalWorkedHours(element.workHours, element.lunchHours) ||
        0;
      totalHours += dayRangeSum;
    });

    setWorkedHoursMonth(totalHours);
  };

  const getworkedHoursDay = () => {
    const currentDay = dayjsUtil.getCurrentDate();
    const currentDayLog = workLogs?.filter(
      (day) => dayjsUtil.getFormatedDate(day.date) === currentDay
    );

    if (currentDayLog) {
      const workedHours = util.calculateTotalWorkedHours(
        currentDayLog[0].workHours,
        currentDayLog[0].lunchHours
      );

      setWorkedHoursDay(workedHours);
    }
  };

  const getFormatedHour = (hour) => {
    return util.formatHour(hour);
  };

  const getPorcentage = (part, total) => {
    return Math.floor((part / 100 / total) * 100) || 0;
  };

  useEffect(() => {
    getWorkedHoursMonth();
    getworkedHoursDay();
  }, [workLogs]);

  return (
    <Container>
      <Title>Today</Title>
      <Text>{EXPECTED_HOURS_DAY}h expected</Text>
      <Text>
        {getFormatedHour(workedHoursDay)} registered (
        {getPorcentage(workedHoursDay, EXPECTED_HOURS_DAY)}%)
      </Text>
      <Title>At July</Title>
      <Text>168h expected</Text>
      <Text>
        {getFormatedHour(workedHoursMonth)} registered (
        {getPorcentage(workedHoursMonth, 168)}%)
      </Text>
    </Container>
  );
};

export default HoursResumeCard;
