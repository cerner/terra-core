import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, {
  HeaderCellGrid,
  HeaderCell,
  CellGrid,
  Cell,
} from 'terra-table-cell-grid';
import CommonIcon from '../common/CommonIcon';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <TableCellGrid
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell
          key="cell-0"
        >
          Lorem ipsum dolor
        </HeaderCell>
        <HeaderCell
          icon={<CommonIcon />}
          key="cell-1"
        >
          Lorem ipsum dolor
        </HeaderCell>
        <HeaderCell
          isSelectable
          sort="desc"
          key="cell-2"
        >
          Lorem
        </HeaderCell>
        <HeaderCell
          icon={<CommonIcon />}
          isSelectable
          sort="asc"
          key="cell-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HeaderCell>
        <HeaderCell
          icon={<CommonIcon />}
          isSelectable
          sort="asc"
          key="cell-4"
        />
      </HeaderCellGrid>
    )}
  >
    <CellGrid>
      <Cell />
    </CellGrid>
  </TableCellGrid>
);

export default TableHeaderCellExample;
