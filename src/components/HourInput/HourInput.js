import { Container, InputLabel, InputContainer, Input } from './styles';

const HourInput = ({ labels, hoursRange, setHoursRange }) => {
  const handleHourChange = (event) => {
    setHoursRange(event.target.value);
  };

  return (
    <Container>
      <InputContainer>
        <InputLabel>{labels[0]}</InputLabel>
        <Input
          type="time"
          value={hoursRange.start}
          onChange={handleHourChange}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>{labels[1]}</InputLabel>
        <Input 
          type="time" 
          value={hoursRange.end}
          onChange={handleHourChange} />
      </InputContainer>
    </Container>
  );
};

export default HourInput;
