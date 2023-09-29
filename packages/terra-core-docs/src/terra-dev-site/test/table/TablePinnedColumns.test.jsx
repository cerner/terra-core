import React from 'react';
import Table from 'terra-table';
import tableData from './mockPinnedColumnsTableData.json';

const TablePinnedColumns = () => {
  const { cols, rows } = tableData;

  return (
    <Table
      id="table-pinned-columns"
      pinnedColumns={cols.slice(0, 3)}
      overflowColumns={cols.slice(3)}
      rows={rows}
      rowHeaderIndex={0}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default TablePinnedColumns;
