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

const Login = ({ navigation }) => {
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
      <Input></Input>

      <Button onClick={handleLogin}>Log In</Button>

      <SignUpText>
        Don't have an account?
        <Link href="">Sign up here!</Link>
      </SignUpText>
    </Container>
  );
};

export default Login;
