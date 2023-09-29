import React from 'react';
import Table, { TableContext } from 'terra-table';
import tableData from './mockTableData.json';

const DefaultTable = () => {
  const { cols, rows } = tableData;

  return (
    <TableContext.Provider value={{ role: 'grid' }}>
      <Table
        id="default-terra-table"
        overflowColumns={cols}
        rows={rows}
        rowHeaderIndex={0}
        columnHeaderHeight="50px"
        ariaLabel="table"
      />
    </TableContext.Provider>
  );
};

export default DefaultTable;
