import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid,
  Cell,
  Section,
  Subsection,
  HeaderCellGrid,
  HeaderCell,
  Utils,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section-sub';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const SectionWithSubsection2 = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);
  let rowCount = 1;

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createCellGrid = (cellGridData) => {
    rowCount += 1;
    return (
      <CellGrid
        key={cellGridData.key}
        aria-rowindex={rowCount}
      >
        {createCellsForCellGrid(cellGridData.cells)}
      </CellGrid>
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
        {subsectionData.childItems.map(childItem => createCellGrid(childItem))}
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
    <TableCellGrid
      aria-rowcount={rowCount}
      paddingStyle="standard"
      headerCellGrid={(
        <HeaderCellGrid aria-rowindex="1">
          <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      {sections}
    </TableCellGrid>
  );
};

export default SectionWithSubsection2;
