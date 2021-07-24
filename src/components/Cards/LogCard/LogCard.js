import { useState } from 'react';

import {
  Container,
  RowCell,
  ButtonContainer,
  Button
} from './styles';

import HourInput from '../../HourInput/HourInput';

const LogCard = ({ day }) => {
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

  const getFormatedDate = () => {
    return `${day.date.format('D')} ${day.date.format(
      'MMM'
    )}, ${day.date.format('ddd')}`;
  };

  return (
    <Container>
      <RowCell>{getFormatedDate()}</RowCell>

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

      <RowCell>
        24hrs
        {!checkForEmptyFields(hoursRangeWork) ? (
          <ButtonContainer>
            <Button>Save</Button>
          </ButtonContainer>
        ) : null}
      </RowCell>
    </Container>
  );
};

export default LogCard;
