import React from 'react';
import Table from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = (rowData, index) => (
  {
    key: rowData.key,
    isStriped: index % 2 !== 0,
    cells: createCellsForRow(rowData.cells),
  }
);

const createSection = sectionData => (
  {
    sectionHeader: {
      key: sectionData.key,
      id: `section-${sectionData.key}`,
      title: sectionData.title,
    },
    rows: sectionData.childItems.map((childItem, index) => createRow(childItem, index)),
  }
);

const createSections = data => data.map(childItem => createSection(childItem));

const StripedTableSection = () => (
  <Table
    paddingStyle="standard"
    headerData={{
      cells: [
        {
          key: 'cell-0',
          id: 'toggle-0',
          children: ['Column 0'],
        },
        {
          key: 'cell-1',
          id: 'toggle-1',
          children: ['Column 1'],
        },
        {
          key: 'cell-2',
          id: 'toggle-2',
          children: ['Column 2'],
        },
      ],
    }}
    sectionData={createSections(mockData)}
  />
);

export default StripedTableSection;
