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

const SectionWithSubsection1 = () => {
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

  const createSubsection = (subsectionData, subsectionIndex) => {
    rowCount += 1;
    return (
      <Subsection
        key={subsectionData.key}
        aria-rowindex={rowCount}
        title={subsectionData.title}
      >
        {subsectionData.childItems.map((childItem, cellGridIndex) => createCellGrid(childItem, subsectionIndex + cellGridIndex))}
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
      {sectiions}
    </TableCellGrid>
  );
};

export default SectionWithSubsection1;
