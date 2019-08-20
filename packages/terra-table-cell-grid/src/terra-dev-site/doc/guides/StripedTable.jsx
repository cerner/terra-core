import React from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const createCellGrid = (itemData, index) => (
  <CellGrid
    key={itemData.key}
    isStriped={index % 2 !== 0}
    metaData={{ key: itemData.key }}
  >
    {createCellsForCellGrid(itemData.cells)}
  </CellGrid>
);

const createCellGrids = data => data.map((childItem, index) => createCellGrid(childItem, index));

const StripedTable = () => (
  <TableCellGrid
    paddingStyle="standard"
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>
        <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>
        <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>
        <HeaderCell isPadded key="cell-4">Column 3</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    {createCellGrids(mockData)}
  </TableCellGrid>
);

export default StripedTable;
