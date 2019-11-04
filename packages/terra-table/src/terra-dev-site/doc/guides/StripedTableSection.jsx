import React from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell, Section,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => <Cell key={cell.key}>{cell.title}</Cell>;

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
    headerRow={(
      <HeaderRow>
        <HeaderCell key="cell-1">Column 0</HeaderCell>
        <HeaderCell key="cell-2">Column 1</HeaderCell>
        <HeaderCell key="cell-3">Column 2</HeaderCell>
      </HeaderRow>
    )}
  >
    {createSections(mockData)}
  </Table>
);

export default StripedTableSection;
