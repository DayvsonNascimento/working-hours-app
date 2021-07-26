import { useState } from 'react';
import { isEmpty } from '../../../utils/utils';

import { Container, RowCell, ButtonContainer, Button } from './styles';

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

  const getFormatedDate = () => {
    return `${day.date.format('D MMM, ddd')}`;
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
        {!isEmpty(hoursRangeWork) ? (
          <ButtonContainer>
            <Button>Save</Button>
          </ButtonContainer>
        ) : null}
      </RowCell>
    </Container>
  );
};

export default LogCard;
