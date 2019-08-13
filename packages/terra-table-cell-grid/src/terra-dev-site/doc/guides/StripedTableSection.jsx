import React from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCell, Section,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

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

const createSection = sectionData => (
  <Section
    key={sectionData.key}
    title={sectionData.title}
  >
    {sectionData.childItems.map((childItem, index) => createCellGrid(childItem, index))}
  </Section>
);

const createSections = data => data.map(childItem => createSection(childItem));

const StripedTableSection = () => (
  <TableCellGrid
    paddingStyle="standard"
    headerCells={[
      <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>,
      <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>,
      <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>,
    ]}
  >
    {createSections(mockData)}
  </TableCellGrid>
);

export default StripedTableSection;
