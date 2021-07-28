import { render, screen } from '@testing-library/react';
import LogTable from '../LogTable';

describe('LogTable component should', () => {
  it('render without errors', () => {
    render(<LogTable />);
  });

  it('display default text labels', () => {
    render(<LogTable />);

    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Hours range')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  it('display selectd month and year', () => {
    const month = 7;
    const monthName = 'July';
    const year = '2021';
    render(<LogTable month={month} />);

    expect(screen.getByDisplayValue(monthName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(year)).toBeInTheDocument();
  });
});
