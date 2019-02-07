import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table header={(
    <Header>
      <HeaderCell>
        <Placeholder title="Basic Content" style={{ height: '50px', width: '200px' }} />
      </HeaderCell>
      <HeaderCell isSelectable sort="asc">
        <Placeholder title="Asc Content" style={{ height: '50px', width: '200px' }} />
      </HeaderCell>
      <HeaderCell isSelectable sort="desc">
        <Placeholder title="Desc Content" style={{ height: '50px', width: '200px' }} />
      </HeaderCell>
    </Header>
  )}
  />
);

export default TableHeaderCellExample;
