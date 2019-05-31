import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { HeaderCell } from 'terra-flex-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderExample = () => (
  <Table headerCells={[
    <HeaderCell>Header</HeaderCell>,
  ]}
  />
);

export default TableHeaderExample;
