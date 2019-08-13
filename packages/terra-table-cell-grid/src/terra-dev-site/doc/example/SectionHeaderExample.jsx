import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { SectionHeader } from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionHeaderExample = () => (
  <TableCellGrid>
    <SectionHeader title="Default SectionHeader" key="default" />
  </TableCellGrid>
);

export default TableSectionHeaderExample;
