import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const IconHome = styled(AiOutlineHome)`
  text-align: center;
  float: left;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  margin-right: 7px;
  padding: 8px;
  background-color: rgba(245, 248, 250, 0.2);
`;

export const IconUser = styled(AiOutlineUser)`
  text-align: center;
  float: left;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  margin-right: 7px;
  padding: 8px;
  background-color: rgba(245, 248, 250, 0.2);
`;

export const LeftMenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RightMenuContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  color: #f5f8fa;
  font-weight: bold;
`;
