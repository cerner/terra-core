import React from 'react';
import Table, {
  HeaderRow, HeaderCell, Row, Cell,
} from '../../../index';

const HeaderFooterTest = () => (
  <Table
    headerRow={(
      <HeaderRow>
        <HeaderCell key="cell-0">Default Header Cell</HeaderCell>
      </HeaderRow>
    )}
    headerNode={<p>Header Toolbar</p>}
    footerNode={<p>Footer Toolbar</p>}
  >
    <Row>
      <Cell key="cell-0">Default Cell</Cell>
    </Row>
  </Table>
);

export default HeaderFooterTest;
