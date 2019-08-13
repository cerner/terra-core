import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, { CellGrid, Cell } from 'terra-table-cell-grid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CellGridExample = () => (
  <TableCellGrid
    paddingStyle="standard"
  >
    <CellGrid key="default_row">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid key="striped_row" isStriped>
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid isSelectable key="selectable_row">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid isSelectable isSelected key="selected_row">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid dividerStyle="none" key="divider_none">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid dividerStyle="vertical" key="divider_vertical">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid dividerStyle="horizontal" key="divider_horizontal">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
    <CellGrid dividerStyle="both" key="divider_both">
      <Cell isPadded key="cell-0">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-1">
        Lorem ipsum dolor
      </Cell>
      <Cell isPadded key="cell-2">
        Lorem ipsum dolor
      </Cell>
    </CellGrid>
  </TableCellGrid>
);

export default CellGridExample;
