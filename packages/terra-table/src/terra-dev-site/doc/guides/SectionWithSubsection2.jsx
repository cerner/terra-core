import React, {
  useState,
} from 'react';
import Table, {
  Row,
  Cell,
  Section,
  Subsection,
  HeaderRow,
  HeaderCell,
  Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section-sub';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const SectionWithSubsection2 = () => {
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

  const createSubsection = (subsectionData) => {
    const isCollapsed = collapsedKeys.indexOf(subsectionData.key) >= 0;
    rowCount += 1;

    return (
      <Subsection
        key={subsectionData.key}
        aria-rowindex={rowCount}
        title={subsectionData.title}
        isCollapsed={isCollapsed}
        isCollapsible
        metaData={{ key: subsectionData.key }}
        onSelect={handleSectionSelection}
      >
        {subsectionData.childItems.map(childItem => createRow(childItem))}
      </Subsection>
    );
  };

  const createSection = sectionData => {
    rowCount += 1;
    return (
      <Section
        key={sectionData.key}
        aria-rowindex={rowCount}
        title={sectionData.title}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
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
          <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>
        </HeaderRow>
      )}
    >
      {sections}
    </Table>
  );
};

export default SectionWithSubsection2;
