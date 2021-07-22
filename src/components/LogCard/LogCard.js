import { Container, RowCell } from './styles';

import HourInput from '../HourInput/HourInput';

const LogCard = () => {
  return (
    <Container>
      <RowCell>1 Jul, Thu</RowCell>
      <RowCell>
        <HourInput label="Start - End" />
        <HourInput label="Lunch" />
      </RowCell>
      <RowCell>24hrs</RowCell>
      <RowCell>Sample comment</RowCell>
    </Container>
  );
};

export default LogCard;
