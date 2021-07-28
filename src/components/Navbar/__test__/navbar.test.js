import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe('NavBar component should', () => {
  it('render without errors', () => {
    render(<NavBar />);
  });

  it('display Home text', () => {
    render(<NavBar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
