import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.RowContent content={'Table Data'} key={1} />;
const cellData2 = <Table.RowContent content={'Table Data'} key={2} />;
const cellData3 = <Table.RowContent content={'Table Data'} key={3} />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key={0}>{rowData}</Table.Row>;
const row2 = <Table.Row key={1}>{rowData}</Table.Row>;
const rows = [row1, row2];
const headerData1 = <Table.HeaderContent content={'Column Heading'} key={1} />;
const headerData2 = <Table.HeaderContent content={'Column Heading'} key={2} />;
const headerData3 = <Table.HeaderContent content={'Column Heading'} key={3} />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render a default table', () => {
  const defaultTable = (
    <Table>
      <Table.Header>{header}</Table.Header>
      <Table.Rows>{rows}</Table.Rows>
    </Table>
    );
  const table = shallow(defaultTable);
  expect(table).toMatchSnapshot();
});

it('should render a table without zebra stripes', () => {
  const defaultTable = (
    <Table isStriped={false}>
      <Table.Header>{header}</Table.Header>
      <Table.Rows>{rows}</Table.Rows>
    </Table>
    );
  const table = shallow(defaultTable);
  expect(table).toMatchSnapshot();
});
