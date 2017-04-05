import React from 'react';
import Table from '../../src/Table';

const shortid = require('shortid');

// Constants
const cellData1 = <Table.RowContent content={'Table Data'} key={shortid.generate()} />;
const cellData2 = <Table.RowContent content={'Table Data'} key={shortid.generate()} />;
const cellData3 = <Table.RowContent content={'Table Data'} key={shortid.generate()} />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key={shortid.generate()}>{rowData}</Table.Row>;
const row2 = <Table.Row key={shortid.generate()}>{rowData}</Table.Row>;
const rows = [row1, row2];
const headerData1 = <Table.HeaderContent content={'Column Heading'} key={shortid.generate()} />;
const headerData2 = <Table.HeaderContent content={'Column Heading'} key={shortid.generate()} />;
const headerData3 = <Table.HeaderContent content={'Column Heading'} key={shortid.generate()} />;
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
