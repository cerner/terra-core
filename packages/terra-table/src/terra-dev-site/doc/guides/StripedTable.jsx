import React from 'react';
import Table, {
  Row, Cell, Header, HeaderCell,
} from 'terra-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px' }} />
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
    header={(
      <Header>
        <HeaderCell>Column 0</HeaderCell>
        <HeaderCell>Column 1</HeaderCell>
        <HeaderCell>Column 2</HeaderCell>
      </Header>
    )}
  >
    {createTableRows(mockData)}
  </Table>
);

export default StripedTable;
