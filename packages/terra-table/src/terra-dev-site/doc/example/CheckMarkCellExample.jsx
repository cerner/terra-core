import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, CheckMarkCell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CheckMarkCellExample = () => (
  <Table>
    <Row>
      <CheckMarkCell />
      <CheckMarkCell isPadded />
      <CheckMarkCell isSelectable alignmentPadding="2" />
      <CheckMarkCell isSelected />
      <CheckMarkCell isSelected isDisabled />
      <CheckMarkCell isSelectable />
      <CheckMarkCell isSelectable isSelected />
      <CheckMarkCell isSelectable isSelected isDisabled />
    </Row>
  </Table>
);

export default CheckMarkCellExample;
