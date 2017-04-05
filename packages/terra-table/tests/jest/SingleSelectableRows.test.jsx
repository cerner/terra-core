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

// Snapshot test
it('should render SingleSelectableRows tag', () => {
  const defaultTableRows = <Table.SingleSelectableRows>{rows}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render SingleSelectableRows with maximum height set', () => {
  const defaultTableRows = <Table.SingleSelectableRows height={'medium'}>{rows}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});
