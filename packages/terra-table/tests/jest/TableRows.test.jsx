import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.RowContent display={'Table Data'} key={1} />;
const cellData2 = <Table.RowContent display={'Table Data'} key={2} />;
const cellData3 = <Table.RowContent display={'Table Data'} key={3} />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key={0}>{rowData}</Table.Row>;
const row2 = <Table.Row key={1}>{rowData}</Table.Row>;
const rows = [row1, row2];

// Snapshot test
it('should render TableRows tag', () => {
  const defaultTableRows = <Table.Rows>{rows}</Table.Rows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});
