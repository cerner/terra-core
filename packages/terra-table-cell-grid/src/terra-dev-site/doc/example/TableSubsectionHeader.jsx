import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { SubsectionHeader } from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSubsectionHeaderExample = () => (
  <TableCellGrid>
    <SubsectionHeader title="Default SubsectionHeader" key="default" />
  </TableCellGrid>
);

export default TableSubsectionHeaderExample;
