import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, {
  HeaderCell, CellGrid, Cell,
} from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import FixedNode from '../common/FixedNode';

const HeaderFooterExample = () => (
  <TableCellGrid
    headerNode={<FixedNode title="Header" />}
    footerNode={<FixedNode title="Footer" />}
    paddingStyle="default"
    id="Table"
    headerCells={[
      <HeaderCell isPadded key="NAME">Name</HeaderCell>,
      <HeaderCell isPadded key="ADDRESS">Address</HeaderCell>,
      <HeaderCell isPadded key="PHONE_NUMBER">Phone Number</HeaderCell>,
    ]}
  >
    <CellGrid key="PERSON_0">
      <Cell isPadded key="NAME">John Smith</Cell>
      <Cell isPadded key="ADDRESS">123 Adams Drive</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
    <CellGrid isSelected key="PERSON_1">
      <Cell isPadded key="NAME">Jane Smith</Cell>
      <Cell isPadded key="ADDRESS">321 Drive Street</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
    <CellGrid isSelectable key="PERSON_2">
      <Cell isPadded key="NAME">Dave Smith</Cell>
      <Cell isPadded key="ADDRESS">213 Raymond Road</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
  </TableCellGrid>
);

export default HeaderFooterExample;
