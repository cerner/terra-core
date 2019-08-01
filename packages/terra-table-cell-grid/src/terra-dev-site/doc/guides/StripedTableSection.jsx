import React from 'react';
import Table, {
  Row, Cell, HeaderCell, Section,
} from 'terra-table-cell-grid/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = (itemData, index) => (
  <Row
    key={itemData.key}
    isStriped={index % 2 !== 0}
    metaData={{ key: itemData.key }}
  >
    {createCellsForRow(itemData.cells)}
  </Row>
);

const createSection = sectionData => (
  <Section
    key={sectionData.key}
    title={sectionData.title}
  >
    {sectionData.childItems.map((childItem, index) => createRow(childItem, index))}
  </Section>
);

const createSections = data => data.map(childItem => createSection(childItem));

const StripedTableSection = () => (
  <Table
    paddingStyle="standard"
    headerCells={[
      <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>,
      <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>,
      <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>,
    ]}
  >
    {createSections(mockData)}
  </Table>
);

export default StripedTableSection;
