import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableCellExample = () => (
  <Table
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
