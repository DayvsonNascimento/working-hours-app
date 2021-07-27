import { useState, useEffect } from 'react';
import * as util from '../../../utils/utils';
import * as dayjsUtil from '../../../utils/dayjsUtils';
import {
  validate,
  validateOptinalField,
  validateHoursRange,
} from '../../../utils/validators/hoursInputValidator';

import {
  Container,
  RowCell,
  ButtonContainer,
  Button,
  ErrorText,
} from './styles';

import HourInput from '../../CustomInput/HourInput';

const LogCard = ({ day, submitWorkLog }) => {
  const [hoursRangeWork, setHoursRangeWork] = useState({
    start: '',
    end: '',
  });
  const [hoursRangeLunch, setHoursRangeLunch] = useState({
    start: '',
    end: '',
  });
  const [errors, setErrors] = useState({});

  const saveHoursRange = async () => {
    const errorHoursWork = validate(hoursRangeWork);
    const errorHoursLunch = validateOptinalField(hoursRangeLunch);

    const workedHoursSum = dayjsUtil.calculateTotalWorkedHours(
      hoursRangeWork,
      hoursRangeLunch
    );
    const errorValuesRange = validateHoursRange(workedHoursSum);

    if (
      util.isEmpty(errorHoursWork) &&
      util.isEmpty(errorHoursLunch) &&
      util.isEmpty(errorValuesRange)
    ) {
      submitWorkLog(
        day.date.format('YYYYMMDD'),
        hoursRangeWork,
        hoursRangeLunch
      );
    }

    setErrors({
      workHours: errorHoursWork,
      lunchHours: errorHoursLunch,
      range: errorValuesRange,
    });
  };

  const formatHour = () => {
    const workedHoursDay = dayjsUtil.calculateTotalWorkedHours(
      hoursRangeWork,
      hoursRangeLunch
    );

    const formatedHour = dayjsUtil.formatHour(workedHoursDay)

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
        {<ErrorText>{errors?.lunchHours?.message}</ErrorText>}
      </RowCell>
      <RowCell>
        {formatHour()}
        {!util.isEmpty(hoursRangeWork) ? (
          <ButtonContainer>
            <Button onClick={saveHoursRange}>Save</Button>
          </ButtonContainer>
        ) : null}
      </RowCell>
    </Container>
  );
};

export default LogCard;
