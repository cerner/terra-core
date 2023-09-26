import React from 'react';
import Table from 'terra-table';
import tableData from './mockTableData.json';

const TableStickyHeader = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = tableData;

  return (
    // eslint-disable-next-line react/forbid-dom-props, jsx-a11y/no-noninteractive-tabindex
    <div style={{ height: '250px', overflow: 'scroll' }} tabIndex={0} className="table-container">
      <Table
        id="table-sticky-header"
        overflowColumns={cols}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        columnWidth="180px"
        ariaLabel="Table"
      />
    </div>
  );
};

export default TableStickyHeader;
