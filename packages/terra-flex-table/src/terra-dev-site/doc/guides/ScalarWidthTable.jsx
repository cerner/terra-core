import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const widths = [
  { scalar: 2 },
  { scalar: 1 },
  { scalar: 3 },
  { scalar: 4 },
];

const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));

const createTableRow = itemData => (
  <Row key={itemData.key}>
    {createCellsForRow(itemData.cells)}
  </Row>
);

const createTableRows = data => data.map(childItem => createTableRow(childItem));

const SingleSelectTable = () => (
  <Table
    paddingStyle="standard"
    headerCells={[
      <HeaderCell isPadded key="cell-0" width={widths[0]}>Scalar 2</HeaderCell>,
      <HeaderCell isPadded key="cell-1" width={widths[1]}>Scalar 1</HeaderCell>,
      <HeaderCell isPadded key="cell-2" width={widths[2]}>Scalar 3</HeaderCell>,
      <HeaderCell isPadded key="cell-3" width={widths[3]}>Scalar 4</HeaderCell>,
    ]}
  >
    {createTableRows(mockData)}
  </Table>
);

export default SingleSelectTable;
