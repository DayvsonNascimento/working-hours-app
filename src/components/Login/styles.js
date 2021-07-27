import styled from 'styled-components';
import { CustomErrorText } from '../../assets/styles/GlobaStyles';

export const Form = styled.form`
  background-color: #ffffff;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 24px 60px;
  box-shadow: 0 1px 1px 1px #e3e3e3;
  border-radius: 5px;
  color: #7a7a7a;
`;

export const Label = styled.label`
  text-align: left;
  margin-bottom: 2px;
  font-size: 14px;
`;

export const Input = styled.input`
  margin: 5px 0px 15px 0px;
  padding-left: 8px;
  padding-right: 8px;
  width: auto;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  cursor: text;
`;

export const Button = styled.button`
  background-color: rgb(29, 161, 242);
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  padding: 8px;
  border: none;
  font-weight: bold;

  &:disabled {
    cursor: auto;
    background-color: rgb(29, 161, 242, 0.5);
  }
`;

export const Title = styled.h2`
  margin: 10px 0 10px;
`;

export const SignUpBox = styled.div`
  width: 100%;
  margin-top: 24px;
  font-size: 14px;
  background-color: #f5f8fa;
`;

export const SignUpText = styled.p`
  color: rgb(27, 149, 224);
  font-size: 13px;
  margin-bottom: 0;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;
`;

export const ErrorText = styled(CustomErrorText)`
  text-align: center;
`;
