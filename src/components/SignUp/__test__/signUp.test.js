import { fireEvent, render, screen, act } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import * as API from '../../../services/auth/Auth';
import * as util from '../../../utils/utils';
import SignUp from '../SignUp';

describe('SignUp component should', () => {
  it('render without errores', () => {
    render(<SignUp />);
  });

  it('display default text fields when rendered', () => {
    render(<SignUp />);

    expect(screen.getByText('Create your account')).toBeInTheDocument();
    expect(screen.getByText('Full name')).toBeInTheDocument();
    expect(screen.getByText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Confirm password')).toBeInTheDocument();
  });

  it('render with Register button disabled', () => {
    render(<SignUp />);

    expect(screen.getByText(/Register/i).closest('button')).toBeDisabled();
  });

  it('enable Register button when input is provided', () => {
    render(<SignUp />);

    const fullNameInput = screen.getAllByDisplayValue('')[0];
    const emailInput = screen.getAllByDisplayValue('')[1];
    const passwordInput = screen.getAllByDisplayValue('')[2];
    const confirmPasswordInput = screen.getAllByDisplayValue('')[3];

    fireEvent.change(fullNameInput, {
      target: { value: 'Full name' },
    });
    fireEvent.change(emailInput, {
      target: { value: 'email' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password' },
    });

    expect(screen.getByText(/Register/i).closest('button')).toBeEnabled();
  });

  it('call API for Login request when login button is pressed', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignUp />
      </Router>
    );

    const fullNameInput = screen.getAllByDisplayValue('')[0];
    const emailInput = screen.getAllByDisplayValue('')[1];
    const passwordInput = screen.getAllByDisplayValue('')[2];
    const confirmPasswordInput = screen.getAllByDisplayValue('')[3];
    const button = screen.getByText(/Register/i).closest('button');
    const spy = jest
      .spyOn(API, 'signUp')
      .mockResolvedValue({ message: 'Resolved' });
    jest.spyOn(util, 'isEmpty').mockResolvedValue(true);

    fireEvent.change(fullNameInput, {
      target: { value: 'Full name' },
    });
    fireEvent.change(emailInput, {
      target: { value: 'email' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password' },
    });

    act(() => {
      fireEvent.click(button);
    });

    expect(spy).toHaveBeenCalled();
  });
});
