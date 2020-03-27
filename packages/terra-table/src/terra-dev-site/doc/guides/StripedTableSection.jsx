import React from 'react';
import Table from 'terra-table';
import mockData from './mock-data/mock-section';

const createCell = cell => ({ key: cell.key, children: cell.title });

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
    summaryId="example-striped-section-table"
    summary="This table shows an implementation of striped section table."
    numberOfColumns={3}
    cellPaddingStyle="standard"
    dividerStyle="horizontal"
    headerData={{
      cells: [
        { key: 'cell-0', id: 'toggle-10', children: 'Column 0' },
        { key: 'cell-1', id: 'toggle-11', children: 'Column 1' },
        { key: 'cell-2', id: 'toggle-12', children: 'Column 2' },
      ],
    }}
    bodyData={createSections(mockData)}
  />
);

export default StripedTableSection;
