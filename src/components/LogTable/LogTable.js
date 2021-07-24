import LogCard from '../Cards/LogCard/LogCard';

import {
  Container,
  Table,
  TableHeader,
  TableRow,
  HeaderCell,
  Body,
} from './styles';

const LogTable = () => {
  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCell>Date</HeaderCell>
            <HeaderCell>Hours range</HeaderCell>
            <HeaderCell>Total</HeaderCell>
            <HeaderCell>Comment</HeaderCell>
          </TableRow>
        </TableHeader>

        <Body>
          <LogCard />
          <LogCard />
          <LogCard />
        </Body>
      </Table>
    </Container>
  );
};

export default LogTable;
