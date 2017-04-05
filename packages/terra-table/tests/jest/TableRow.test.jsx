import React from 'react';
import Table from '../../src/Table';

const shortid = require('shortid');

// Constants
const cellData1 = <Table.RowContent content={'Table Data'} key={shortid.generate()} />;
const cellData2 = <Table.RowContent content={'Table Data'} key={shortid.generate()} />;
const cellData3 = <Table.RowContent content={'Table Data'} key={shortid.generate()} />;
const rowData = [cellData1, cellData2, cellData3];

// Snapshot test
it('should render a default table row', () => {
  const defaultTableRow = <Table.Row>{rowData}</Table.Row>;
  const tableRow = shallow(defaultTableRow);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selectable table row', () => {
  const defaultTableRow = <Table.Row isSelectable>{rowData}</Table.Row>;
  const tableRow = shallow(defaultTableRow);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selected table row', () => {
  const defaultTableRow = <Table.Row isSelected>{rowData}</Table.Row>;
  const tableRow = shallow(defaultTableRow);
  expect(tableRow).toMatchSnapshot();
});
