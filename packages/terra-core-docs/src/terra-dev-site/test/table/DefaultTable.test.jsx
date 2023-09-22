import React from 'react';
import Table from 'terra-table';
import tableData from './mockTableData.json';

const DefaultTable = () => {
  const { cols, rows } = tableData;

  return (
    <Table
      id="default-terra-table"
      overflowColumns={cols}
      rows={rows}
      rowHeaderIndex={0}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default DefaultTable;
