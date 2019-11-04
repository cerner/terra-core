import React, {
  useState,
} from 'react';
import Table, {
  Row,
  Cell,
  Section,
  HeaderRow,
  HeaderCell,
  Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => <Cell key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const SectionTable = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);
  let rowCount = 1;

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createRow = (rowData) => {
    rowCount += 1;
    return (
      <Row
        key={rowData.key}
        aria-rowindex={rowCount}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  };

  const createSection = (sectionData) => {
    rowCount += 1;
    return (
      <Section
        key={sectionData.key}
        aria-rowindex={rowCount}
        title={sectionData.title}
        isCollapsed={collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createRow(childItem))}
      </Section>
    );
  };

  const sections = mockData.map(section => createSection(section));

  return (
    <Table
      aria-rowcount={rowCount}
      paddingStyle="standard"
      headerRow={(
        <HeaderRow aria-rowindex="1">
          <HeaderCell key="cell-1">Column 0</HeaderCell>
          <HeaderCell key="cell-2">Column 1</HeaderCell>
          <HeaderCell key="cell-3">Column 2</HeaderCell>
        </HeaderRow>
      )}
    >
      {sections}
    </Table>
  );
};

export default SectionTable;
