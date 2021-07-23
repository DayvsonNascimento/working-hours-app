import { Container, Text, Title } from './styles';

const HoursResumeCard = () => {
  return (
    <Container>
      <Title>This week</Title>
      <Text>40h expected</Text>
      <Text>0h registered (0%)</Text>
      <Title>At July</Title>
      <Text>168h expected</Text>
      <Text>16h registered (10%)</Text>
      <Title>At 2021</Title>
      <Text>1424h expected</Text>
      <Text> 424h registered (30%)</Text>
    </Container>
  );
};

export default HoursResumeCard;
