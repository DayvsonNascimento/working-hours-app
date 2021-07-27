import { useState, useEffect } from 'react';

import * as API from '../../services/user/User';
import * as util from '../../utils/dayjsUtils';

import LogTable from '../../components/LogTable/LogTable';
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard';
import HoursResumeCard from '../../components/Cards/HoursResumeCard/HoursResumeCard';

import { Container, RightSideContainer, ContentContainer } from './styles';

const HomePage = () => {
  const [workLogs, setWorkLogs] = useState(null);
  const [currentMonth, setcurrentMonth] = useState('');
  const [currentYear, setcurrentYear] = useState('');

  const loadWorkLogs = async (month, year) => {
    setcurrentMonth(month);
    setcurrentYear(year);

    const data = await API.loadWorkSchedule({
      month: month,
    });

    const daysData = util.getDaysCurrentMonth(month, year, data);
    setWorkLogs(daysData);
  };

  useEffect(() => {
    const month = util.getFormatedMonth();
    const year = util.getFormatedYear();

    loadWorkLogs(month, year);
  }, []);

  return (
    <Container>
      <ContentContainer>
        <LogTable
          workLogs={workLogs}
          month={currentMonth}
          year={currentYear}
          loadWorkLogs={loadWorkLogs}
        />
        <RightSideContainer>
          <ProfileCard />
          <HoursResumeCard workLogs={workLogs} />
        </RightSideContainer>
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
