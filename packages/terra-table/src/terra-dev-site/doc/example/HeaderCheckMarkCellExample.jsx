import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { HeaderRow, HeaderCheckMarkCell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const HeaderCheckMarkCellExample = () => (
  <Table
    headerRow={(
      <HeaderRow>
        <HeaderCheckMarkCell />
      </HeaderRow>
    )}
  />
);

export default HeaderCheckMarkCellExample;
