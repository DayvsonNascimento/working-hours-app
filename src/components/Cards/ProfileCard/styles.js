import styled from 'styled-components';
import { CardContainer } from '../../../assets/styles/GlobaStyles';
import { AiOutlineUser } from 'react-icons/ai';

export const Container = styled(CardContainer)`
  text-align: center;
  align-items: center;
`;

export const Icon = styled(AiOutlineUser)`
  text-align: center;
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 8px;
  background-color: rgba(53, 152, 220, 0.2);
`;

export const Text = styled.p`
  color: #a1a1a1;
  word-break: break-word;
`;
