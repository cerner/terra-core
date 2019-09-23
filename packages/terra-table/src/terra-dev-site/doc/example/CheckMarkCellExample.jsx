import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, CheckMarkCell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CheckMarkCellExample = () => (
  <Table>
    <Row>
      <CheckMarkCell />
      <CheckMarkCell isSelectable alignmentPadding="2" />
      <CheckMarkCell isSelectable />
      <CheckMarkCell isSelectable isSelected />
      <CheckMarkCell isPadded />
    </Row>
  </Table>
);

export default CheckMarkCellExample;
