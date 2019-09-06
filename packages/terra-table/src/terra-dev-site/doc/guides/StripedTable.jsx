import React from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = (rowData, index) => (
  <Row
    key={rowData.key}
    isStriped={index % 2 !== 0}
    metaData={{ key: rowData.key }}
  >
    {createCellsForRow(rowData.cells)}
  </Row>
);

const createRows = data => data.map((childItem, index) => createRow(childItem, index));

const StripedTable = () => (
  <Table
    paddingStyle="standard"
    headerRow={(
      <HeaderRow>
        <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>
        <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>
        <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>
        <HeaderCell isPadded key="cell-4">Column 3</HeaderCell>
      </HeaderRow>
    )}
  >
    {createRows(mockData)}
  </Table>
);

export default StripedTable;
