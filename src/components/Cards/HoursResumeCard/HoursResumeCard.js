import { useEffect, useState } from 'react';
import * as util from '../../../utils/utils';
import * as dayjsUtil from '../../../utils/dayjsUtils';
import {
  EXPECTED_HOURS_DAY,
  EXPECTED_HOURS_MONTH,
} from '../../../utils/constants';

import { Container, TitleContainer, Text, Title, Icon } from './styles';

const HoursResumeCard = ({ workLogs, month }) => {
  const [workedHoursMonth, setWorkedHoursMonth] = useState(null);
  const [workedHoursDay, setWorkedHoursDay] = useState(null);

  const getWorkedHoursMonth = () => {
    let totalDuration = dayjsUtil.createDuration();

    workLogs?.forEach((element) => {
      const valuesRange = dayjsUtil.calculateTotalWorkedHours(
        element.workHours,
        element.lunchHours
      );
      if (valuesRange) {
        totalDuration = totalDuration.add(valuesRange);
      }
    });

    setWorkedHoursMonth(totalDuration);
  };

  const getworkedHoursDay = () => {
    const currentDay = dayjsUtil.getCurrentDate();
    const currentDayLog = workLogs?.filter(
      (day) => dayjsUtil.getFormatedDate(day.date) === currentDay
    );
    let workedHours = dayjsUtil.createDuration();

    if (currentDayLog?.length) {
      workedHours = dayjsUtil.calculateTotalWorkedHours(
        currentDayLog[0].workHours,
        currentDayLog[0].lunchHours
      );

      setWorkedHoursDay(workedHours);
    }
  };

  const getFormatedHour = (hour) => {
    return dayjsUtil.formatHour(hour);
  };

  useEffect(() => {
    getWorkedHoursMonth();
    getworkedHoursDay();
  }, [workLogs]);

  return (
    <Container>
      <TitleContainer>
        <Icon />
        <Title>Today</Title>
      </TitleContainer>
      <Text>{EXPECTED_HOURS_DAY}h expected</Text>
      <Text>{getFormatedHour(workedHoursDay)} registered</Text>

      <TitleContainer>
        <Icon />
        <Title>At {util.getMonthFullName(month)}</Title>
      </TitleContainer>
      <Text>{EXPECTED_HOURS_MONTH}h expected</Text>
      <Text>{getFormatedHour(workedHoursMonth)} registered</Text>
    </Container>
  );
};

export default HoursResumeCard;
