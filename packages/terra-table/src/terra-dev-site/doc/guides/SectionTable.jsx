import React, {
  useState,
} from 'react';
import Table, {
  Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const SectionTable = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);
  let rowCount = 1;

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createRow = rowData => (
    {
      key: rowData.key,
      cells: createCellsForRow(rowData.cells),
    }
  );

  const createSection = (sectionData) => (
    {
      sectionHeader: {
        id: `sub-${sectionData.key}`,
        key: sectionData.key,
        title: sectionData.title,
        isCollapsed: collapsedKeys.indexOf(sectionData.key) >= 0,
        isCollapsible: true,
        metaData: { key: sectionData.key },
        onSelect: handleSectionSelection,
      },
      rows: sectionData.childItems.map(childItem => createRow(childItem)),
    }
  );

  const sections = mockData.map(section => createSection(section));

  return (
    <Table
      aria-rowcount={rowCount}
      paddingStyle="standard"
      headerData={{
        cells: [
          {
            key: 'cell-0',
            id: 'header-0',
            children: ['Column 0'],
          },
          {
            key: 'cell-1',
            id: 'header-1',
            children: ['Column 1'],
          },
          {
            key: 'cell-2',
            id: 'header-2',
            children: ['Column 2'],
          },
        ],
      }}
      sectionData={sections}
    />
  );
};

export default SectionTable;
