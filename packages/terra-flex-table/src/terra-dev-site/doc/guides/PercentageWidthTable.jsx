import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const widths = [
  { percentage: 20 },
  { percentage: 40 },
  { percentage: 10 },
  { percentage: 30 },
];

const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));

const createTableRow = itemData => (
  <Row key={itemData.key}>
    {createCellsForRow(itemData.cells)}
  </Row>
);

const createTableRows = data => data.map(childItem => createTableRow(childItem));

const PercentageWidthTable = () => (
  <Table
    paddingStyle="standard"
    headerCells={[
      <HeaderCell isPadded key="cell-0" width={widths[0]}>20%</HeaderCell>,
      <HeaderCell isPadded key="cell-1" width={widths[1]}>40%</HeaderCell>,
      <HeaderCell isPadded key="cell-2" width={widths[2]}>10%</HeaderCell>,
      <HeaderCell isPadded key="cell-3" width={widths[3]}>30%</HeaderCell>,
    ]}
  >
    {createTableRows(mockData)}
  </Table>
);

export default PercentageWidthTable;
