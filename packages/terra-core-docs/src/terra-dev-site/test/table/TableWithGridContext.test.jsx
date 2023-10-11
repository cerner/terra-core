import React from 'react';
import Table, { GridContext } from 'terra-table';
import tableData from './mockPinnedColumnsTableData.json';

const DefaultTable = () => {
  const { cols, rows } = tableData;
  return (
    <GridContext.Provider value={{ role: 'grid' }}>
      <Table
        id="default-terra-table"
        overflowColumns={cols}
        rows={rows}
        rowHeaderIndex={0}
        columnHeaderHeight="50px"
        ariaLabel="table"
      />
    </GridContext.Provider>
  );
};

export default DefaultTable;
