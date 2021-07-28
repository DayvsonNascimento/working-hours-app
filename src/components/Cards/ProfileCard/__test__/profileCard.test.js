import { render, screen } from '@testing-library/react';
import ProfileCard from '../ProfileCard';

describe('ProfileCard component should', () => {
  it('render without errors', () => {
    render(<ProfileCard />);
  });

  it('render with passed profile info', () => {
    const profileInfo = { fullName: 'Full Name', email: 'email@email.com' };

    render(<ProfileCard profile={profileInfo} />);

    expect(screen.getByText(profileInfo.fullName)).toBeInTheDocument();
    expect(screen.getByText(profileInfo.email)).toBeInTheDocument();
  });
});
