import React from 'react';
import Table from 'terra-table';

const TableHeaderCellExample = () => (
  <Table
    summaryId="example-header-cell"
    summary="This a fixed height table."
    headerData={{
      cells:[
        {
          id: 'column-0',
          key: 'key-0',
          children: [
            'Lorem ipsum dolor',
          ],
        },
        {
          id: 'column-1',
          key: 'key-1',
          isSelectable: true,
          sort: 'desc',
          children: [
            'Lorem',
          ],
        },
        {
          id: 'column-2',
          key: 'key-2',
          isSelectable: true,
          sort: 'asc',
          children: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          ],
        },
      ],
    }}
  />
);

export default TableHeaderCellExample;
