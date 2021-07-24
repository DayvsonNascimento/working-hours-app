import styled from 'styled-components';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCaretDown,
} from 'react-icons/ai';

export const Container = styled.div`
  background: #3598dc;
  z-index: 99;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: -5px 3px 14px -9px rgba(0, 0, 0, 0.51);
`;

export const Content = styled.div`
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

export const RighNavbarContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  color: #f5f8fa;
  font-weight: bold;
`;

export const DropdownContent = styled.div`
  display: none;
  border-radius: 5px;
  background-color: #ddd;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 15px;
`;

export const Dropdown = styled.div`
  cursor: pointer;
  float: left;
  overflow: hidden;
  
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownItem = styled.a`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  
  &:hover {
    background-color: #ddd;
`;

export const DropdownIcon = styled(AiOutlineCaretDown)`
  margin-left: 2px;
  color: #ffffff;
`;
