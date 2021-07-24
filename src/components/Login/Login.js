import { useHistory } from 'react-router-dom';

import {
  Container,
  Label,
  Input,
  Button,
  Title,
  SignUpText,
  Link,
} from './styles';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/');
  };

  return (
    <Container>
      <Title>Login</Title>

      <Label>Email</Label>
      <Input></Input>

      <Label>Password</Label>
      <Input type='password'></Input>

      <Button onClick={handleLogin}>Log In</Button>

      <SignUpText>
        Don't have an account?
        <Link href=""> Sign up here!</Link>
      </SignUpText>
    </Container>
  );
};

export default Login;
