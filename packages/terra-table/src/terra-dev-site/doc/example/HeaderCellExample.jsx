import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderRow,
  HeaderCell,
  Row,
  Cell,
} from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table
    headerData={{
      cells:[
        {
          key: 'key-0',
          children: [
            'Lorem ipsum dolor',
          ],
        },
        {
          key: 'key-1',
          isSelectable: true,
          sort: 'desc',
          children: [
            'Lorem',
          ],
        },
        {
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
