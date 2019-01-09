import React from 'react';
import Table, { Row, Cell, Section } from '../../../index';

const TableSectionTest = () => (
  <Table>
    <Section colSpan={1} title="Default Section" key="default-section">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Section>
    <Section colSpan={1} isCollapsible title="Collapsible Section" key="collapsible-section" id="test-header">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Section>
    <Section colSpan={1} isCollapsed isCollapsible title="Collapsed Section" key="collapsed-section">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Section>
  </Table>
);

export default TableSectionTest;
