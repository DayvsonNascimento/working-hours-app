import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';

export const Container = styled.div`
  background: #fff;
  z-index: 99;
  padding-left: 10px;
  box-shadow: -5px 3px 14px -9px rgba(0, 0, 0, 0.51);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(AiOutlineHome)`
  text-align: center;
  float: left;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  margin-right: 7px;
  padding: 8px;
  background-color: rgba(135, 158, 207, 0.1);
`;

export const Title = styled.p`
`
