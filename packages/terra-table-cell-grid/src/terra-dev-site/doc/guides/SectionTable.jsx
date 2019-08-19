import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid,
  Cell,
  Section,
  Header,
  HeaderCell,
  Utils,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const createCellGrid = itemData => <CellGrid key={itemData.key}>{createCellsForCellGrid(itemData.cells)}</CellGrid>;

const SectionTable = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createSection = sectionData => (
    <Section
      key={sectionData.key}
      title={sectionData.title}
      isCollapsed={collapsedKeys.indexOf(sectionData.key) >= 0}
      isCollapsible
      metaData={{ key: sectionData.key }}
      onSelect={handleSectionSelection}
    >
      {sectionData.childItems.map(childItem => createCellGrid(childItem))}
    </Section>
  );

  const createSections = data => data.map(section => createSection(section));

  return (
    <TableCellGrid
      paddingStyle="standard"
      header={(
        <Header>
          <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>
        </Header>
      )}
    >
      {createSections(mockData)}
    </TableCellGrid>
  );
};

export default SectionTable;
