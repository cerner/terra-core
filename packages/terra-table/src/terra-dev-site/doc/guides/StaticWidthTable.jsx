import React from 'react';
import Table from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: cell.title });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = rowData => (
  {
    key: rowData.key,
    cells: createCellsForRow(rowData.cells),
  }
);

const createRows = data => data.map(childItem => createRow(childItem));

const StaticWidthTable = () => (
  <Table
    summaryId="example-static-table"
    summary="This table shows an implementation of static width table columns."
    paddingStyle="standard"
    columnWidths={[
      { static: { value: 80, unit: 'px' } },
      { static: { value: 55, unit: 'px' } },
      { static: { value: 5, unit: 'rem' } },
      { static: { value: 120, unit: 'px' } },
    ]}
    headerData={{
      cells: [
        { key: 'cell-0', id: `unique-cell-0`, children: '60px' },
        { key: 'cell-1', id: `unique-cell-1`, children: '45px' },
        { key: 'cell-2', id: `unique-cell-2`, children: '5rem' },
        { key: 'cell-3', id: `unique-cell-3`, children: '120px' },
      ],
    }}
    sectionData={[{
      rows: createRows(mockData),
    }]}
  />
);

export default StaticWidthTable;
