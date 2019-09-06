import React from 'react';
import Table, {
  HeaderCell, HeaderRow,
} from '../../../index';

const HeaderRowTest = () => (
  <React.Fragment>
    <Table
      key="default"
      headerRow={(
        <HeaderRow>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderRow>
      )}
    />
    <Table
      key="check"
      selectionStyle="checkmark"
      headerRow={(
        <HeaderRow>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderRow>
      )}
    />
    <Table
      key="chevron"
      selectionStyle="chevron"
      headerRow={(
        <HeaderRow>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderRow>
      )}
    />
  </React.Fragment>
);

export default HeaderRowTest;
