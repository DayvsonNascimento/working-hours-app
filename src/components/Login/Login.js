import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { hasEmptyField } from '../../utils/utils';
import * as API from '../../services/auth/Auth';

import {
  Form,
  Label,
  Input,
  Button,
  Title,
  SignUpText,
  Link,
  ErrorText,
} from './styles';

const Login = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState(null);
  const [submitted, setHassubmitted] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setHassubmitted(true);

    const response = await API.login(formValues);

    if (!response.error) {
      history.push('/');
      return history.go(0);
    }

    setLoginError(response.error);
    setHassubmitted(false);
  };

  const handleSignUpRedirect = () => {
    history.push('/signup');
  };

  const handleChange = (event, property) => {
    setFormValues({ ...formValues, [property]: event.target.value });
  };

  return (
    <Form onSubmit={handleLogin}>
      <Title>Login</Title>
      <ErrorText>{loginError}</ErrorText>

      <Label>Email</Label>
      <Input
        type="text"
        value={formValues.email}
        onChange={(event) => handleChange(event, 'email')}
      ></Input>

      <Label>Password</Label>
      <Input
        type="password"
        value={formValues.password}
        onChange={(event) => handleChange(event, 'password')}
      ></Input>

      <Button type="submit" disabled={hasEmptyField(formValues) || submitted}>
        Log In
      </Button>
      <SignUpText>
        Don't have an account?
        <Link onClick={handleSignUpRedirect}> Sign up here!</Link>
      </SignUpText>
    </Form>
  );
};

export default Login;
