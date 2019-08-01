import React, {
  useState,
} from 'react';
import Table, {
  Row,
  Cell,
  Section,
  HeaderCell,
  Utils,
} from 'terra-table-cell-grid/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = itemData => <Row key={itemData.key}>{createCellsForRow(itemData.cells)}</Row>;

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
      {sectionData.childItems.map(childItem => createRow(childItem))}
    </Section>
  );

  const createSections = data => data.map(section => createSection(section));

  return (
    <Table
      paddingStyle="standard"
      headerCells={[
        <HeaderCell isPadded key="cell-1">Column 0</HeaderCell>,
        <HeaderCell isPadded key="cell-2">Column 1</HeaderCell>,
        <HeaderCell isPadded key="cell-3">Column 2</HeaderCell>,
      ]}
    >
      {createSections(mockData)}
    </Table>
  );
};

export default SectionTable;
