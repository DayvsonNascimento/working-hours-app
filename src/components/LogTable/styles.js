import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px 1px #e3e3e3;
  border-radius: 5px;
  float: left;
  width: calc((100% - 250px) / 12 * 9 + 192px);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HeaderCell = styled.th`
  padding: 16px 8px 16px 8px;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 20%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e3e3e3;
`;

export const SelectContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 14px;
  line-height: 38px;
  height: 35px;
  color: #4d4d4d;
  background: #fff;
  padding: 5px;
  margin-right: 24px;
`;

export const Option = styled.option``

export const TableHeader = styled.thead``;

export const Body = styled.tbody``;
