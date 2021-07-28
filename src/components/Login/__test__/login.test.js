import { fireEvent, render, screen, act } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import * as API from '../../../services/auth/Auth';
import Login from '../Login';

describe('Login component should', () => {
  it('render without errores', () => {
    render(<Login />);
  });

  it('display Login, Email and Password labels', () => {
    render(<Login />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('render with Login button disabled', () => {
    render(<Login />);

    expect(screen.getByText(/Log in/i).closest('button')).toBeDisabled();
  });

  it('enable Login button when input is provided', () => {
    render(<Login />);

    const emailInput = screen.getAllByDisplayValue('')[0];
    const passwordInput = screen.getAllByDisplayValue('')[1];

    fireEvent.change(emailInput, {
      target: { value: 'email' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });

    expect(screen.getByText(/Log in/i).closest('button')).toBeEnabled();
  });

  it('try Login button when input is provided', () => {
    render(<Login />);

    const emailInput = screen.getAllByDisplayValue('')[0];
    const passwordInput = screen.getAllByDisplayValue('')[1];

    fireEvent.change(emailInput, {
      target: { value: 'email' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });

    expect(screen.getByText(/Log in/i).closest('button')).toBeEnabled();
  });

  it('call API for Login request when login button is pressed', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const emailInput = screen.getAllByDisplayValue('')[0];
    const passwordInput = screen.getAllByDisplayValue('')[1];
    const button = screen.getByText(/Log in/i).closest('button');
    const spy = jest
      .spyOn(API, 'login')
      .mockResolvedValue({ message: 'Resolved' });

    fireEvent.change(emailInput, {
      target: { value: 'email' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });
    fireEvent.click(button);

    expect(spy).toHaveBeenCalled();
  });
});
