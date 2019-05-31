import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { HeaderCell } from 'terra-flex-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table headerCells={[
    <HeaderCell
      icon={<div style={{ border: '1px dotted black', height: '1em', width: '1em' }} />}
    >
      Lorem ipsum dolor
    </HeaderCell>,
    <HeaderCell
      icon={<div style={{ border: '1px dotted black', height: '1em', width: '1em' }} />}
      isSelectable
      sort="asc"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </HeaderCell>,
    <HeaderCell
      icon={<div style={{ border: '1px dotted black', height: '1em', width: '1em' }} />}
      isSelectable
      sort="desc"
    >
      Lorem
    </HeaderCell>,
  ]}
  />
);

export default TableHeaderCellExample;
