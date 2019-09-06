import React from 'react';
import Table, { Row, Cell, Section } from '../../../index';

const SectionTest = () => (
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

export default SectionTest;
