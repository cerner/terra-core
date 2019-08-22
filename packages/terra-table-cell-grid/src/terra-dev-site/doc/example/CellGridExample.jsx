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
        Default CellGrid
      </Cell>
    </CellGrid>
    <CellGrid key="striped_row" isStriped>
      <Cell isPadded key="cell-0">
        Striped CellGrid
      </Cell>
    </CellGrid>
    <CellGrid isSelectable key="selectable_row">
      <Cell isPadded key="cell-0">
        Selectable CellGrid
      </Cell>
    </CellGrid>
    <CellGrid isSelectable isSelected key="selected_row">
      <Cell isPadded key="cell-0">
        Selected CellGrid
      </Cell>
    </CellGrid>
    <CellGrid selectionStyle="checkmark" isSelectable isSelected key="selection-checkmark">
      <Cell isPadded>Selection Style Checkmark</Cell>
    </CellGrid>
    <CellGrid selectionStyle="chevron" isSelectable key="selection-chevron">
      <Cell isPadded>Selection Style Chevron</Cell>
    </CellGrid>
    <CellGrid dividerStyle="vertical" key="divider_vertical">
      <Cell isPadded key="cell-0">
        Vertical Divider CellGrid
      </Cell>
      <Cell isPadded key="cell-1">
        Vertical Divider CellGrid
      </Cell>
      <Cell isPadded key="cell-2">
        Vertical Divider CellGrid
      </Cell>
    </CellGrid>
    <CellGrid dividerStyle="horizontal" key="divider_horizontal">
      <Cell isPadded key="cell-0">
        Horizontal Divider CellGrid
      </Cell>
      <Cell isPadded key="cell-1">
        Horizontal Divider CellGrid
      </Cell>
      <Cell isPadded key="cell-2">
        Horizontal Divider CellGrid
      </Cell>
    </CellGrid>
    <CellGrid dividerStyle="both" key="divider_both">
      <Cell isPadded key="cell-0">
        Both Dividers CellGrid
      </Cell>
      <Cell isPadded key="cell-1">
        Both Dividers CellGrid
      </Cell>
      <Cell isPadded key="cell-2">
        Both Dividers CellGrid
      </Cell>
    </CellGrid>
  </TableCellGrid>
);

export default CellGridExample;
