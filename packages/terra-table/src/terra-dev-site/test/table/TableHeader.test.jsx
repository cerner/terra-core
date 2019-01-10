import React from 'react';
import Table, {
  Header, HeaderCell,
} from '../../../index';

const TableHeaderTest = () => (
  <Table
    id="Table"
    header={(
      <Header>
        <HeaderCell key="cell-0">Default Cell</HeaderCell>
        <HeaderCell key="cell-1" sort="asc">ASC Cell</HeaderCell>
        <HeaderCell key="cell-2" sort="desc">DESC Cell</HeaderCell>
        <HeaderCell key="cell-3" minWidth="tiny">Tiny Cell</HeaderCell>
        <HeaderCell key="cell-4" minWidth="small">Small Cell</HeaderCell>
        <HeaderCell key="cell-5" minWidth="medium">Medium Cell</HeaderCell>
        <HeaderCell key="cell-6" minWidth="large">Large Cell</HeaderCell>
        <HeaderCell key="cell-7" minWidth="huge">Huge Cell</HeaderCell>
      </Header>
    )}
  />
);

export default TableHeaderTest;
