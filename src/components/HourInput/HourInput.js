import { Container, InputLabel, InputContainer, Input } from './styles';

const HourInput = ({ labels }) => {
  return (
    <Container>
      <InputContainer>
        <InputLabel>{labels[0]}</InputLabel>
        <Input type="time" />
      </InputContainer>
      <InputContainer>
        <InputLabel>{labels[1]}</InputLabel>
        <Input type="time" />
      </InputContainer>
    </Container>
  );
};

export default HourInput;
