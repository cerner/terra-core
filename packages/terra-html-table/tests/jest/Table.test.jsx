import React from 'react';
import Table, {
  Cell,
  Row,
  HeaderCell,
  Header,
  Body,
} from '../../src/index';

// Constants
const cellData1 = <Cell key="NAME">John Smith</Cell>;
const cellData2 = <Cell key="ADDRESS">123 Adams Drive</Cell>;
const cellData3 = <Cell key="PHONE_NUMBER">111-222-3333</Cell>;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Row key="PERSON_0">{rowData}</Row>;
const row2 = <Row key="PERSON_1">{rowData}</Row>;
const rows = [row1, row2];
const headerData1 = <HeaderCell key="NAME">Name</HeaderCell>;
const headerData2 = <HeaderCell key="ADDRESS">Address</HeaderCell>;
const headerData3 = <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render a default table', () => {
  const shallowComponent = shallow(
    <Table>
      <Header>{header}</Header>
      <Body>{rows}</Body>
    </Table>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table without zebra stripes', () => {
  const shallowComponent = shallow(
    <Table isStriped={false}>
      <Header>{header}</Header>
      <Body>{rows}</Body>
    </Table>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table without padding', () => {
  const shallowComponent = shallow(
    <Table isPadded={false}>
      <Header>{header}</Header>
      <Body>{rows}</Body>
    </Table>,
  );
  expect(shallowComponent).toMatchSnapshot();
});
