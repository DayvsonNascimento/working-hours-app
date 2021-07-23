import React from 'react';

import LogTable from '../../components/LogTable/LogTable';
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard';
import HoursResumeCard from '../../components/Cards/HoursResumeCard/HoursResumeCard';

import { Container, RightSideContainer, ContentContainer } from './styles';

const HomePage = () => {
  return (
    <Container>
      <ContentContainer>
        <LogTable />
        <RightSideContainer>
          <ProfileCard />
          <HoursResumeCard />
        </RightSideContainer>
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
