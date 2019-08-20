import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, {
  HeaderCellGrid, HeaderCell, CellGrid, Cell,
} from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const StripedTable = () => (
  <TableCellGrid
    id="Table"
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell key="NAME" isPadded>Name</HeaderCell>
        <HeaderCell key="ADDRESS" isPadded>Address</HeaderCell>
        <HeaderCell key="PHONE_NUMBER" isPadded>Phone Number</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    <CellGrid key="PERSON_0">
      <Cell key="NAME">John Smith</Cell>
      <Cell key="ADDRESS">123 Adams Drive</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
    <CellGrid key="PERSON_1" isStriped>
      <Cell key="NAME">Jane Smith</Cell>
      <Cell key="ADDRESS">321 Drive Street</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
    <CellGrid key="PERSON_2">
      <Cell key="NAME">Dave Smith</Cell>
      <Cell key="ADDRESS">213 Raymond Road</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
  </TableCellGrid>
);

export default StripedTable;
