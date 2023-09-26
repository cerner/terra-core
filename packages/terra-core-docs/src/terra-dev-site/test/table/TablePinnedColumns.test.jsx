import React from 'react';
import Table from 'terra-table';
import tableData from './mockPinnedColumnsTableData.json';

const TablePinnedColumns = () => {
  const { cols, rows } = tableData;

  return (
    // eslint-disable-next-line react/forbid-dom-props, jsx-a11y/no-noninteractive-tabindex
    <div style={{ overflow: 'auto' }} tabIndex={0} className="table-container">
      <Table
        id="table-pinned-columns"
        pinnedColumns={cols.slice(0, 3)}
        overflowColumns={cols.slice(3)}
        rows={rows}
        rowHeaderIndex={0}
        columnHeaderHeight="50px"
        ariaLabel="table"
      />
    </div>
  );
};

export default TablePinnedColumns;
