import { Container, InputLabel, InputContainer, Input } from './styles';

const HourInput = ({ labels, hoursRange, setHoursRange }) => {
  const handleInputChange = (event, property) => {
    setHoursRange({ ...hoursRange, [property]: event.target.value });
  };

  return (
    <Container>
      <InputContainer>
        <InputLabel>{labels[0]}</InputLabel>
        <Input
          type="time"
          value={hoursRange.start}
          onChange={(event) => handleInputChange(event, 'start')}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>{labels[1]}</InputLabel>
        <Input
          type="time"
          value={hoursRange.end}
          onChange={(event) => handleInputChange(event, 'end')}
        />
      </InputContainer>
    </Container>
  );
};

export default HourInput;
