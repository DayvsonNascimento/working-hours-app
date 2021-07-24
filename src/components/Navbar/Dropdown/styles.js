import styled from 'styled-components';
import { AiOutlineCaretDown } from 'react-icons/ai';

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

export const Container = styled.div`
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

export const Label = styled.p`
  color: #f5f8fa;
  font-weight: bold;
`;
