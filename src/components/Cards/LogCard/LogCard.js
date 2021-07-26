import { useState, useEffect } from 'react';
import { isEmpty } from '../../../utils/utils';
import { validate, validateOptinalField } from '../../../utils/hoursInput';
import * as API from '../../../services/user/User';

import {
  Container,
  RowCell,
  ButtonContainer,
  Button,
  ErrorText,
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
  const [errors, setErrors] = useState({});

  const getFormatedDate = () => {
    return `${day.date.format('D MMM, ddd')}`;
  };

  const saveHoursRange = async () => {
    const errorHoursWork = validate(hoursRangeWork);
    const errorHoursLunch = validateOptinalField(hoursRangeLunch);

    if (isEmpty(errorHoursWork) && isEmpty(errorHoursLunch)) {
      const workDaySchedule = {
        email: 'user@gmail.com',
        date: day.date.format('YYYYMMDD'),
        workHours: hoursRangeWork,
        lunchHours: hoursRangeLunch,
      };

      API.saveWorkDaySchedule(workDaySchedule);
    }

    setErrors({ workHours: errorHoursWork, lunchHours: errorHoursLunch });
  };

  useEffect(() => {
    setHoursRangeWork(day.workHours);
    setHoursRangeLunch(day.lunchHours);
  }, [day]);

  return (
    <Container>
      <RowCell>{getFormatedDate()}</RowCell>
      <RowCell>
        <HourInput
          labels={['Arriving', 'Exiting']}
          hoursRange={hoursRangeWork}
          setHoursRange={setHoursRangeWork}
        />
        {<ErrorText>{errors?.workHours?.message}</ErrorText>}
        <HourInput
          labels={['Lunch start', 'Lunch end']}
          hoursRange={hoursRangeLunch}
          setHoursRange={setHoursRangeLunch}
        />
        {<ErrorText>{errors?.errorHoursLunch?.message}</ErrorText>}
      </RowCell>
      <RowCell>
        24hrs
        {!isEmpty(hoursRangeWork) ? (
          <ButtonContainer>
            <Button onClick={saveHoursRange}>Save</Button>
          </ButtonContainer>
        ) : null}
      </RowCell>
    </Container>
  );
};

export default LogCard;
