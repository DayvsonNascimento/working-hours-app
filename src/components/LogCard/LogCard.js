import { Container, RowCell } from './styles';

import HourInput from '../HourInput/HourInput';

const LogCard = () => {
  return (
    <Container>
      <RowCell>1 Jul, Thu</RowCell>
      <RowCell>
        <HourInput labels={['Arriving', 'Exiting']} />
        <HourInput labels={['Lunch start', 'Lunch end']} />
      </RowCell>
      <RowCell>24hrs</RowCell>
      <RowCell>Sample comment</RowCell>
    </Container>
  );
};

export default LogCard;
