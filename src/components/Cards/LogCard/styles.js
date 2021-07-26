import styled from 'styled-components';

export const Container = styled.tr`
  &:hover {
    background-color: rgba(135, 158, 207, 0.1);
  }
  border-bottom: 1px solid #e3e3e3;
  position: relative;
`;

export const ContentContainer = styled.div``;

export const RowCell = styled.td`
  padding: 8px;
  font-size: 14px;
  color: #737373;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 108px;
  background-color: rgb(29, 161, 242);
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  padding: 8px;
  border: none;
`;

export const ErrorText = styled.div`
  margin-top: -7px;
  font-size: 12px;
  text-align: left;
  color: #f02849;
  margin-bottom: 2px;
  padding-left: 3px;
`;
