import React from 'react';
import TableCellGrid, {
  HeaderCell, HeaderCellGrid,
} from '../../../index';

const HeaderCellGridTest = () => (
  <React.Fragment>
    <TableCellGrid
      key="default"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderCellGrid>
      )}
    />
    <TableCellGrid
      key="check"
      selectionStyle="checkmark"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderCellGrid>
      )}
    />
    <TableCellGrid
      key="chevron"
      selectionStyle="chevron"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCell key="cell-0">Cell 0</HeaderCell>
          <HeaderCell key="cell-1">Cell 1</HeaderCell>
          <HeaderCell key="cell-2">Cell 2</HeaderCell>
        </HeaderCellGrid>
      )}
    />
  </React.Fragment>
);

export default HeaderCellGridTest;
