import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const widths = [
  { static: { value: 80, unit: 'px' } },
  { static: { value: 55, unit: 'px' } },
  { static: { value: 5, unit: 'rem' } },
  { static: { value: 120, unit: 'px' } },
];

const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));

const createTableRow = itemData => (
  <Row key={itemData.key}>
    {createCellsForRow(itemData.cells)}
  </Row>
);

const createTableRows = data => data.map(childItem => createTableRow(childItem));

const FixedWidthTable = () => (
  <Table
    paddingStyle="standard"
    headerCells={[
      <HeaderCell isPadded key="cell-0" width={widths[0]}>60px</HeaderCell>,
      <HeaderCell isPadded key="cell-1" width={widths[1]}>45px</HeaderCell>,
      <HeaderCell isPadded key="cell-2" width={widths[2]}>5rem</HeaderCell>,
      <HeaderCell isPadded key="cell-3" width={widths[3]}>120px</HeaderCell>,
    ]}
  >
    {createTableRows(mockData)}
  </Table>
);

export default FixedWidthTable;
