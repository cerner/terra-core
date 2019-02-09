import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table>
    <Row key="default_row">
      <Cell>
        <Placeholder title="Default" style={{ height: '50px' }} />
      </Cell>
    </Row>
    <Row key="striped_row" isStriped>
      <Cell>
        <Placeholder title="Striped" style={{ height: '50px' }} />
      </Cell>
    </Row>
    <Row isSelectable key="selectable_row">
      <Cell>
        <Placeholder title="Selectable" style={{ height: '50px' }} />
      </Cell>
    </Row>
    <Row isSelectable isSelected key="selected_row">
      <Cell>
        <Placeholder title="Selected" style={{ height: '50px' }} />
      </Cell>
    </Row>
  </Table>
);

export default TableRowExample;
