import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid,
  Cell,
  Section,
  HeaderCellGrid,
  HeaderCell,
  Utils,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const createCellGrid = cellGridData => <CellGrid key={cellGridData.key}>{createCellsForCellGrid(cellGridData.cells)}</CellGrid>;

const SectionTable = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createSection = (sectionData) => {
    const isCollapsed = collapsedKeys.indexOf(sectionData.key) >= 0;
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={isCollapsed}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {!isCollapsed && sectionData.childItems.map(childItem => createCellGrid(childItem))}
      </Section>
    );
  };

  const createSections = data => data.map(section => createSection(section));

  return (
    <TableCellGrid
      paddingStyle="standard"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      {createSections(mockData)}
    </TableCellGrid>
  );
};

export default SectionTable;
