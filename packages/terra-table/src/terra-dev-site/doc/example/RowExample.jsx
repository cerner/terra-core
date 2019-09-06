import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const RowExample = () => (
  <Table
    paddingStyle="standard"
  >
    <Row key="default_row">
      <Cell isPadded key="cell-0">
        Default Row
      </Cell>
    </Row>
    <Row key="striped_row" isStriped>
      <Cell isPadded key="cell-0">
        Striped Row
      </Cell>
    </Row>
    <Row isSelectable key="selectable_row">
      <Cell isPadded key="cell-0">
        Selectable Row
      </Cell>
    </Row>
    <Row isSelectable isSelected key="selected_row">
      <Cell isPadded key="cell-0">
        Selected Row
      </Cell>
    </Row>
    <Row selectionStyle="checkmark" isSelectable isSelected key="selection-checkmark">
      <Cell isPadded>Selection Style Checkmark</Cell>
    </Row>
    <Row selectionStyle="chevron" isSelectable key="selection-chevron">
      <Cell isPadded>Selection Style Chevron</Cell>
    </Row>
    <Row dividerStyle="vertical" key="divider_vertical">
      <Cell isPadded key="cell-0">
        Vertical Divider Row
      </Cell>
      <Cell isPadded key="cell-1">
        Vertical Divider Row
      </Cell>
      <Cell isPadded key="cell-2">
        Vertical Divider Row
      </Cell>
    </Row>
    <Row dividerStyle="horizontal" key="divider_horizontal">
      <Cell isPadded key="cell-0">
        Horizontal Divider Row
      </Cell>
      <Cell isPadded key="cell-1">
        Horizontal Divider Row
      </Cell>
      <Cell isPadded key="cell-2">
        Horizontal Divider Row
      </Cell>
    </Row>
    <Row dividerStyle="both" key="divider_both">
      <Cell isPadded key="cell-0">
        Both Dividers Row
      </Cell>
      <Cell isPadded key="cell-1">
        Both Dividers Row
      </Cell>
      <Cell isPadded key="cell-2">
        Both Dividers Row
      </Cell>
    </Row>
  </Table>
);

export default RowExample;
