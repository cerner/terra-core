import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table header={(
    <Header>
      <HeaderCell>
        <Placeholder title="Cell Content" style={{ height: '50px' }} />
      </HeaderCell>
    </Header>
  )}
  />
);

export default TableHeaderCellExample;
