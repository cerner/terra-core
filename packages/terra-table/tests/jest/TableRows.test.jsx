import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.Cell content={'John Smith'} key={'NAME'} />;
const cellData2 = <Table.Cell content={'123 Adams Drive'} key={'ADDRESS'} />;
const cellData3 = <Table.Cell content={'111-222-3333'} key={'PHONE_NUMBER'} />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key={'PERSON_0'}>{rowData}</Table.Row>;
const row2 = <Table.Row key={'PERSON_1'}>{rowData}</Table.Row>;
const rows = [row1, row2];

// Snapshot test
it('should render TableRows tag', () => {
  const defaultTableRows = <Table.Rows>{rows}</Table.Rows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});
