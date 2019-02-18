import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table header={(
    <Header>
      <HeaderCell
        icon={<div style={{ border: '1px dotted black', height: '1em', width: '1em' }} />}
      >
        Lorem ipsum dolor
      </HeaderCell>
      <HeaderCell
        icon={<div style={{ border: '1px dotted black', height: '1em', width: '1em' }} />}
        isSelectable
        sort="asc"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </HeaderCell>
      <HeaderCell
        icon={<div style={{ border: '1px dotted black', height: '1em', width: '1em' }} />}
        isSelectable
        sort="desc"
      >
        Lorem
      </HeaderCell>
    </Header>
  )}
  />
);

export default TableHeaderCellExample;
