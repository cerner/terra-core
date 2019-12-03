import React from 'react';
import Table from 'terra-table';

const TableCellExample = () => (
  <Table
    summaryId="example-table"
    summary="This table shows an example cell."
    sectionData={[{
      rows: [{
        key: 'row-0',
        cells: [{
          key: 'cell-0',
          children: ['Lorem ipsum dolor'],
        }],
      }]
    }]}
  />
);

export default TableCellExample;
