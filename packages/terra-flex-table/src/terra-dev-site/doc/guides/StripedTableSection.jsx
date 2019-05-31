import React from 'react';
import Table, {
  Row, Cell, HeaderCell, Section,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-section';

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

const createSection = sectionData => (
  <Section
    key={sectionData.key}
    title={sectionData.title}
    colSpan={3}
  >
    {sectionData.childItems.map((childItem, index) => createTableRow(childItem, index))}
  </Section>
);

const createSections = data => data.map(childItem => createSection(childItem));

const StripedTableSection = () => (
  <Table
    paddingStyle="standard"
    headerCells={[
      <HeaderCell key="cell-1">Column 0</HeaderCell>,
      <HeaderCell key="cell-2">Column 1</HeaderCell>,
      <HeaderCell key="cell-3">Column 2</HeaderCell>,
    ]}
  >
    {createSections(mockData)}
  </Table>
);

export default StripedTableSection;
