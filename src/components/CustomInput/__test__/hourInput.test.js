import { render, screen } from '@testing-library/react';
import HourInput from '../HourInput';

describe('LogTable component should', () => {
  const labels = ['Arriving', 'Exiting'];
  const hoursRange = { start: '08:00', end: '18:00' };

  it('render without errors', () => {
    render(<HourInput labels={labels} hoursRange={hoursRange} />);
  });

  it('render with passed labels', () => {
    render(<HourInput labels={labels} hoursRange={hoursRange} />);

    expect(screen.getByText(labels[0])).toBeInTheDocument();
    expect(screen.getByText(labels[1])).toBeInTheDocument();

    expect(screen.getAllByDisplayValue(hoursRange.start));
    expect(screen.getAllByDisplayValue(hoursRange.end));
  });
});
