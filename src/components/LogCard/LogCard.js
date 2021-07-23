import { useState } from 'react';

import { Container, RowCell, ButtonContainer, Button } from './styles';

import HourInput from '../HourInput/HourInput';

const LogCard = () => {
  const [hoursRangeWork, setHoursRangeWork] = useState({
    start: '',
    end: '',
  });
  const [hoursRangeLunch, setHoursRangeLunch] = useState({
    start: '',
    end: '',
  });

  const checkForEmptyFields = (object) => {
    return Object.values(object).every((el) => el === '');
  };

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

      {!checkForEmptyFields(hoursRangeWork) ? (
        <ButtonContainer>
          <Button>Save</Button>
        </ButtonContainer>
      ) : null}
    </Container>
  );
};

export default LogCard;
