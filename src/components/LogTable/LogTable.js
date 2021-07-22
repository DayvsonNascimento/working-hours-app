import { Container, Table, TableHeader, HeaderCell, Body } from './styles';

const LogTable = () => {
  return (
    <Container>
      <Table>
        <TableHeader>
          <HeaderCell>Date</HeaderCell>
          <HeaderCell>Hours range</HeaderCell>
          <HeaderCell>Total</HeaderCell>
          <HeaderCell>Comment</HeaderCell>
        </TableHeader>
        <Body></Body>
      </Table>
    </Container>
  );
};

export default LogTable;
