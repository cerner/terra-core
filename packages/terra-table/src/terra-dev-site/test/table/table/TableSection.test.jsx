import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Section } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionTest = () => (
  <Table>
    <Section title="Default Section" key="default-section">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Section>
    <Section isCollapsible title="Collapsible Section" key="collapsible-section" id="test-header">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Section>
    <Section isCollapsed isCollapsible title="Collapsed Section" key="collapsed-section">
      <Row>
        <Cell>
          Cell Content
        </Cell>
      </Row>
    </Section>
  </Table>
);

export default TableSectionTest;
