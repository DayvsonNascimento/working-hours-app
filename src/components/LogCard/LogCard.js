import { useState } from 'react';

import { Container, RowCell } from './styles';

import HourInput from '../HourInput/HourInput';

const LogCard = () => {
  const [hoursRangeWork, setHoursRangeWork] = useState({
    start: undefined,
    end: undefined,
  });
  const [hoursRangeLunch, setHoursRangeLunch] = useState({
    start: undefined,
    end: undefined,
  });

  return (
    <Container>
      <RowCell>1 Jul, Thu</RowCell>
      <RowCell>
        <HourInput
          labels={['Arriving', 'Exiting']}
          hoursRange={hoursRangeWork}
          setHoursRange={setHoursRangeWork}
        />
        <HourInput
          labels={['Lunch start', 'Lunch end']}
          hoursRange={hoursRangeLunch}
          setHoursRange={setHoursRangeLunch}
        />
      </RowCell>
      <RowCell>24hrs</RowCell>
      <RowCell>Sample comment</RowCell>
    </Container>
  );
};

export default LogCard;
