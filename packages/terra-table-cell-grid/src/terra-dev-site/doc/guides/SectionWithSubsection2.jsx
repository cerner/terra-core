import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid,
  Cell,
  Section,
  Subsection,
  HeaderCell,
  Utils,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\
import mockData from './mock-data/mock-section-sub';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const createCellGrid = itemData => <CellGrid key={itemData.key}>{createCellsForCellGrid(itemData.cells)}</CellGrid>;

const SectionWithSubsection2 = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createSubsection = subsectionData => (
    <Subsection
      key={subsectionData.key}
      title={subsectionData.title}
      isCollapsed={collapsedKeys.indexOf(subsectionData.key) >= 0}
      isCollapsible
      metaData={{ key: subsectionData.key }}
      onSelect={handleSectionSelection}
    >
      {subsectionData.childItems.map(childItem => createCellGrid(childItem))}
    </Subsection>
  );

  const createSection = sectionData => (
    <Section
      key={sectionData.key}
      title={sectionData.title}
    >
      {sectionData.childItems.map(childItem => createSubsection(childItem))}
    </Section>
  );

  const createSections = data => data.map(section => createSection(section));

  return (
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
};

export default SectionWithSubsection2;
