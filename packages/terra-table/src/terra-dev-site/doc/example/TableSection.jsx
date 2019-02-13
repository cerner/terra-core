import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Section } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionExample = () => (
  <Table>
    <Section title="Default Section" colSpan={1}>
      <Row>
        <Cell>
          <Placeholder title="Section Row" style={{ height: '50px' }} />
        </Cell>
      </Row>
    </Section>
    <Section isCollapsible title="Collapsible Section" colSpan={1}>
      <Row>
        <Cell>
          <Placeholder title="Section Row" style={{ height: '50px' }} />
        </Cell>
      </Row>
    </Section>
    <Section isCollapsible isCollapsed title="Collapsed Section" colSpan={1}>
      <Row>
        <Cell>
          <Placeholder title="Section Row" style={{ height: '50px' }} />
        </Cell>
      </Row>
    </Section>
  </Table>
);

export default TableSectionExample;
