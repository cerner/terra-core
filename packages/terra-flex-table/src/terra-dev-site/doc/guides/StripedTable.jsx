import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createTableRow = (itemData, index) => (
  <Row
    key={itemData.key}
    isStriped={index % 2 !== 0}
    metaData={{ key: itemData.key }}
  >
    {createCellsForRow(itemData.cells)}
  </Row>
);

const createTableRows = data => data.map((childItem, index) => createTableRow(childItem, index));

const StripedTable = () => (
  <Table
    paddingStyle="standard"
    headerCells={[
      <HeaderCell key="cell-1">Column 0</HeaderCell>,
      <HeaderCell key="cell-2">Column 1</HeaderCell>,
      <HeaderCell key="cell-3">Column 2</HeaderCell>,
    ]}
  >
    {createTableRows(mockData)}
  </Table>
);

export default StripedTable;
