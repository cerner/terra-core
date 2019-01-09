import React from 'react';
import Table, {
  Header, HeaderCell,
} from '../../../../index';

const TableHeaderTest = () => (
  <Table
    id="Table"
    header={(
      <Header>
        <HeaderCell key="cell-0">Default Cell</HeaderCell>
        <HeaderCell key="cell-1" sort="asc">ASC Cell</HeaderCell>
        <HeaderCell key="cell-2" sort="desc">DESC Cell</HeaderCell>
      </Header>
    )}
  />
);

export default TableHeaderTest;
