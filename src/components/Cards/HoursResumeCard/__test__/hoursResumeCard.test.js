import { render, screen } from '@testing-library/react';
import HoursResumeCard from '../HoursResumeCard';
import {
  EXPECTED_HOURS_DAY,
  EXPECTED_HOURS_MONTH,
} from '../../../../utils/constants';

describe('HoursResumeCard component should', () => {
  it('render without errors', () => {
    render(<HoursResumeCard />);
  });

  it('render with the passed month', () => {
    const month = 10;
    const monthName = 'October';
    const displayText = `At ${monthName}`;

    render(<HoursResumeCard month={10} />);

    expect(screen.getByText(displayText)).toBeInTheDocument();
  });

  it('display expected hours by day and month', () => {
    const expectedHoursDayText = `${EXPECTED_HOURS_DAY}h expected`;
    const expectedHoursMonthText = `${EXPECTED_HOURS_MONTH}h expected`;

    render(<HoursResumeCard />);

    expect(screen.getByText(expectedHoursDayText)).toBeInTheDocument();
    expect(screen.getByText(expectedHoursMonthText)).toBeInTheDocument();
  });
});
