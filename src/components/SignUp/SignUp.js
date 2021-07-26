import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validate } from '../../utils/formValidor';
import { isEmpty } from '../../utils/utils';
import * as API from '../../services/auth/Auth';
import { Form, Label, Input, Button, Title, ErroText } from './styles';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [hasSubmited, setHasSubmited] = useState(false);
  const history = useHistory();

  const signUp = async () => {
    const response = await API.signUp(formValues);
    if (response) {
      history.push('/login');
    }
    setHasSubmited(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate(formValues);

    if (isEmpty(formErrors)) {
      setHasSubmited(true);
      signUp();
    } else {
      setErrors(formErrors);
    }
  };

  const hangleChange = (event, property) => {
    setFormValues({ ...formValues, [property]: event.target.value });

    if (errors[property]) {
      setErrors({ ...errors, [property]: undefined });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create your account</Title>

      <Label>Full name</Label>
      <Input
        type="text"
        value={formValues.fullName}
        onChange={(event) => hangleChange(event, 'fullName')}
      ></Input>
      <ErroText>{errors.fullName}</ErroText>

      <Label>Email address</Label>
      <Input
        type="text"
        value={formValues.email}
        onChange={(event) => hangleChange(event, 'email')}
      ></Input>
      <ErroText>{errors.email}</ErroText>

      <Label>Password</Label>
      <Input
        type="password"
        value={formValues.password}
        onChange={(event) => hangleChange(event, 'password')}
      ></Input>
      <ErroText>{errors.password}</ErroText>

      <Label>Confirm password</Label>
      <Input
        type="password"
        value={formValues.confirmPassword}
        onChange={(event) => hangleChange(event, 'confirmPassword')}
      ></Input>
      <ErroText>{errors.confirmPassword}</ErroText>

      <Button type="submit" disabled={hasSubmited}>
        Register
      </Button>
    </Form>
  );
};

export default SignUp;
