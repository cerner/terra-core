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

const SectionWithSubsection1 = () => {
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

  const createSubsection = (subsectionData, subsectionIndex) => {
    rowCount += 1;
    return (
      <Subsection
        key={subsectionData.key}
        aria-rowindex={rowCount}
        title={subsectionData.title}
      >
        {subsectionData.childItems.map((childItem, rowIndex) => createRow(childItem, subsectionIndex + rowIndex))}
      </Subsection>
    );
  };

  const createSection = (sectionData) => {
    const isCollapsed = collapsedKeys.indexOf(sectionData.key) >= 0;
    rowCount += 1;
    return (
      <Section
        key={sectionData.key}
        aria-rowindex={rowCount}
        title={sectionData.title}
        isCollapsed={isCollapsed}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  };

  const sectiions = mockData.map(section => createSection(section));

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
      {sectiions}
    </Table>
  );
};

export default SectionWithSubsection1;
