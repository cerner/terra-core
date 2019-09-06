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
    headerRow={(
      <HeaderRow>
        <HeaderCell
          key="cell-0"
        >
          Lorem ipsum dolor
        </HeaderCell>
        <HeaderCell
          isSelectable
          sort="desc"
          key="cell-1"
        >
          Lorem
        </HeaderCell>
        <HeaderCell
          isSelectable
          sort="asc"
          key="cell-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HeaderCell>
      </HeaderRow>
    )}
  >
    <Row>
      <Cell />
    </Row>
  </Table>
);

export default TableHeaderCellExample;
