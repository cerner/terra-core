import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderExample = () => (
  <Table header={(
    <Header>
      <HeaderCell style={{ height: '50px' }} />
    </Header>
  )}
  />
);

export default TableHeaderExample;
