import React from 'react';
import Table from 'terra-table';
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: cell.title });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = (rowData, index) => (
  {
    key: rowData.key,
    isStriped: index % 2 !== 0,
    cells: createCellsForRow(rowData.cells),
  }
);

const createRows = data => data.map((childItem, index) => createRow(childItem, index));

const StripedTable = () => (
  <Table
    summaryId="example-striped-table"
    summary="This table shows an implementation of striped table."
    paddingStyle="standard"
    headerData={{
      cells: [
        { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },
        { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },
        { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },
        { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },
      ],
    }}
    sectionData={[{
      rows: createRows(mockData),
    }]}
  />
);

export default StripedTable;
