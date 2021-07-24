import { Container, Label, Input, Button, Title } from './styles';

const SignUp = () => {
  return (
    <Container>
      <Title>Create your account</Title>

      <Label>Full name</Label>
      <Input></Input>

      <Label>Email address</Label>
      <Input></Input>

      <Label>Password</Label>
      <Input type="password"></Input>

      <Label>Confirm password</Label>
      <Input type="password"></Input>

      <Button>Register</Button>
    </Container>
  );
};

export default SignUp;
