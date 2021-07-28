import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validate } from '../../utils/validators/signUpFormValidator';
import * as util from '../../utils/utils';
import * as API from '../../services/auth/Auth';

import { Spinner } from '../Spinner/styles';

import {
  Form,
  Label,
  Input,
  Button,
  Title,
  ErrorText,
  ErrorSignUp,
  LoginText,
  Link,
} from './styles';

const SignUp = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmited] = useState(false);

  const signUp = async () => {
    const response = await API.signUp(formValues);

    if (!response.error) {
      handleLoginRedirect();
    }
    setHasSubmited(false);
    setErrors({ ...errors, signUp: response.error });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate(formValues);

    if (util.isEmpty(formErrors)) {
      setHasSubmited(true);
      signUp();
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (event, property) => {
    setFormValues({ ...formValues, [property]: event.target.value });

    if (errors[property]) {
      setErrors({ ...errors, [property]: undefined });
    }
  };

  const shouldDisableSubmit = () => {
    return hasSubmitted || util.hasEmptyField(formValues);
  };

  const handleLoginRedirect = () => {
    history.push('/login');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create your account</Title>
      <ErrorSignUp>{errors.signUp}</ErrorSignUp>

      <Label>Full name</Label>
      <Input
        type="text"
        value={formValues.fullName}
        onChange={(event) => handleChange(event, 'fullName')}
      ></Input>
      <ErrorText>{errors.fullName}</ErrorText>

      <Label>Email address</Label>
      <Input
        type="text"
        value={formValues.email}
        onChange={(event) => handleChange(event, 'email')}
      ></Input>
      <ErrorText>{errors.email}</ErrorText>

      <Label>Password</Label>
      <Input
        type="password"
        value={formValues.password}
        onChange={(event) => handleChange(event, 'password')}
      ></Input>
      <ErrorText>{errors.password}</ErrorText>

      <Label>Confirm password</Label>
      <Input
        type="password"
        value={formValues.confirmPassword}
        onChange={(event) => handleChange(event, 'confirmPassword')}
      ></Input>
      <ErrorText>{errors.confirmPassword}</ErrorText>

      <Button type="submit" disabled={shouldDisableSubmit()}>
        {hasSubmitted ? <Spinner /> : 'Register'}
      </Button>
      <LoginText>
        Already have an account?
        <Link onClick={handleLoginRedirect}> Log in here!</Link>
      </LoginText>
    </Form>
  );
};

export default SignUp;
