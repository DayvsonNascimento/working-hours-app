import { useEffect, useState } from 'react';
import * as util from '../../../utils/utils';

import { Container, Text, Title } from './styles';

const HoursResumeCard = ({ workLogs }) => {
  const [workedHoursMonth, setWorkedHoursMonth] = useState(null);

  const getExpectedHoursMonth = () => {
    let totalHours = 0;

    workLogs?.forEach((element) => {
      const dayRangeSum =
        util.calculateTotalWorkedHours(element.workHours, element.lunchHours) ||
        0;
      totalHours += dayRangeSum;
    });

    setWorkedHoursMonth(totalHours);
  };

  const getFormatedHour = (hour) => {
    return util.formatHour(hour);
  };

  const getPorcentage = (part, total) => {
    return Math.floor((part / 100 / total) * 100);
  };

  useEffect(() => {
    getExpectedHoursMonth();
  }, [workLogs]);

  return (
    <Container>
      <Title>Today</Title>
      <Text>8h expected</Text>
      <Text>2h registered (10%)</Text>
      <Title>At July</Title>
      <Text>168h expected</Text>
      <Text>
        {workedHoursMonth ? getFormatedHour(workedHoursMonth) : 0} registered (
        {workedHoursMonth ? getPorcentage(workedHoursMonth, 168) : 0}%)
      </Text>
    </Container>
  );
};

export default HoursResumeCard;
