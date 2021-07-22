import { Container, InputLabel, InputContainer, Input } from './styles';

const HourInput = ({ label }) => {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        <Input type="time" />
        <Input type="time" />
      </InputContainer>
    </Container>
  );
};

export default HourInput;
