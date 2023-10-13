import React from 'react';
import Table from 'terra-table';
import tableData from './mockTableData.json';

const DefaultTable = () => {
  const { cols, rows } = tableData;

  return (
    <div id="no-interaction-test-container">
      <Table
        id="default-terra-table"
        overflowColumns={cols}
        rows={rows}
        rowHeaderIndex={0}
        columnHeaderHeight="50px"
        ariaLabel="table"
      />
      <button type="button" id="focused-button">I should be Focused</button>
    </div>
  );
};

export default DefaultTable;
