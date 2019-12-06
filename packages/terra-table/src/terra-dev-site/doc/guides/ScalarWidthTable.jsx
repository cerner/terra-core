import React from 'react';
import Table from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = rowData => (
  {
    key: rowData.key,
    cells: createCellsForRow(rowData.cells),
  }
);

const createRows = data => data.map(childItem => createRow(childItem));

const ScalarWidthTable = () => (
  <Table
    summaryId="example-scalar-table"
    summary="This table shows an implementation of scalar width table columns."
    paddingStyle="standard"
    columnWidths={[
      { scalar: 2 },
      { scalar: 1 },
      { scalar: 3 },
      { scalar: 4 },
    ]}
    headerData={{
      cells: [
        { key: 'cell-0', id: 'unique-cell-0', children: 'Scalar 2' },
        { key: 'cell-1', id: 'unique-cell-1', children: 'Scalar 1' },
        { key: 'cell-2', id: 'unique-cell-2', children: 'Scalar 3' },
        { key: 'cell-3', id: 'unique-cell-3', children: 'Scalar 4' },
      ],
    }}
    sectionData={[{
      rows: createRows(mockData),
    }]}
  />
);

export default ScalarWidthTable;
