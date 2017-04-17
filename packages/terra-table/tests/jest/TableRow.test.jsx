import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.Cell content={'John Smith'} key={'NAME'} />;
const cellData2 = <Table.Cell content={'123 Adams Drive'} key={'ADDRESS'} />;
const cellData3 = <Table.Cell content={'111-222-3333'} key={'PHONE_NUMBER'} />;
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
