import React from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const widths = [
  { percentage: 20 },
  { percentage: 40 },
  { percentage: 10 },
  { percentage: 30 },
];

const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));

const createRow = rowData => (
  <Row key={rowData.key}>
    {createCellsForRow(rowData.cells)}
  </Row>
);

const createRows = data => data.map(childItem => createRow(childItem));

const PercentageWidthTable = () => (
  <Table
    paddingStyle="standard"
    headerRow={(
      <HeaderRow>
        <HeaderCell isPadded key="cell-0" width={widths[0]}>20%</HeaderCell>
        <HeaderCell isPadded key="cell-1" width={widths[1]}>40%</HeaderCell>
        <HeaderCell isPadded key="cell-2" width={widths[2]}>10%</HeaderCell>
        <HeaderCell isPadded key="cell-3" width={widths[3]}>30%</HeaderCell>
      </HeaderRow>
    )}
  >
    {createRows(mockData)}
  </Table>
);

export default PercentageWidthTable;
