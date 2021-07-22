import { Container, InputLabel, InputContainer } from '../LogCard/styles';

const HourInputForm = ({ label }) => {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        <HourInput type="time" />
        <HourInput type="time" />
      </InputContainer>
    </Container>
  );
};

export default HourInputForm;
