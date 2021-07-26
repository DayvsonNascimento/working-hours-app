import { useState, useEffect } from 'react';
import { isEmpty } from '../../../utils/utils';
import {
  validate,
  validateOptinalField,
  validateHoursRange,
} from '../../../utils/validators/hoursInputValidator';
import * as API from '../../../services/user/User';

import {
  Container,
  RowCell,
  ButtonContainer,
  Button,
  ErrorText,
} from './styles';

import HourInput from '../../CustomInput/HourInput';

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

  const getHoursrangeValue = (range) => {
    const startTime = parseInt(range?.start?.replace(':', ''));
    const endTime = parseInt(range?.end?.replace(':', ''));
    const totalTime = endTime - startTime;

    return totalTime;
  };

  const calculateTotalWorkedHours = () => {
    const workHoursrangeValue = getHoursrangeValue(hoursRangeWork);
    const lunchHoursrangeValue = getHoursrangeValue(hoursRangeLunch) || 0;
    const workedHours = workHoursrangeValue - lunchHoursrangeValue;

    return workedHours;
  };

  const hasValidHoursRangeValues = (workedHours) => {
    return workedHours !== NaN && workedHours >= 0;
  };

  const saveHoursRange = async () => {
    const errorHoursWork = validate(hoursRangeWork);
    const errorHoursLunch = validateOptinalField(hoursRangeLunch);
    const errorValuesRange = validateHoursRange(calculateTotalWorkedHours());

    if (
      isEmpty(errorHoursWork) &&
      isEmpty(errorHoursLunch) &&
      isEmpty(errorValuesRange)
    ) {
      const workDaySchedule = {
        email: 'user@gmail.com',
        date: day.date.format('YYYYMMDD'),
        workHours: hoursRangeWork,
        lunchHours: hoursRangeLunch,
      };

      API.saveWorkDaySchedule(workDaySchedule);
    }

    setErrors({
      workHours: errorHoursWork,
      lunchHours: errorHoursLunch,
      range: errorValuesRange,
    });
  };

  const formatHour = () => {
    const workedHours = calculateTotalWorkedHours();
    const formatedHour = hasValidHoursRangeValues(workedHours)
      ? (workedHours / 100).toString() + 'h'
      : '';

    return formatedHour;
  };

  const getFormatedDate = () => {
    return `${day.date.format('D MMM, ddd')}`;
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
        {
          <ErrorText>
            {errors?.workHours?.message || errors?.range?.message}
          </ErrorText>
        }
        <HourInput
          labels={['Lunch start', 'Lunch end']}
          hoursRange={hoursRangeLunch}
          setHoursRange={setHoursRangeLunch}
        />
        {<ErrorText>{errors?.errorHoursLunch?.message}</ErrorText>}
      </RowCell>
      <RowCell>
        {formatHour()}
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
