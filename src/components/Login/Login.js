import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { hasEmptyField } from '../../utils/utils';
import * as API from '../../services/auth/Auth';

import { Form, Label, Input, Button, Title, SignUpText, Link } from './styles';

const Login = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (event) => {
    event.preventDefault()

    const response = await API.login(formValues);

    if (response) {
      history.push('/');
    }
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

      <Button disabled={hasEmptyField(formValues)}>Log In</Button>
      <SignUpText>
        Don't have an account?
        <Link onClick={handleSignUpRedirect}> Sign up here!</Link>
      </SignUpText>
    </Form>
  );
};

export default Login;
