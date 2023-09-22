import React from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals' },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17' },
    { id: 'Column-3', displayName: 'March 18' },
  ],
};
const TableWithNoRows = () => {
  const { cols } = tableData;

  return (
    <Table
      id="default-terra-table"
      overflowColumns={cols}
      rowHeaderIndex={0}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default TableWithNoRows;
