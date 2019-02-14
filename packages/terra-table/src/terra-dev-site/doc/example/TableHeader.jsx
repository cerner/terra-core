import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderExample = () => (
  <Table header={(
    <Header>
      <HeaderCell>Header</HeaderCell>
    </Header>
  )}
  />
);

export default TableHeaderExample;
