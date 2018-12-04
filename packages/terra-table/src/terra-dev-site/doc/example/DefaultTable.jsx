import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  Header, HeaderCell, Row, Cell, Section, Subsection,
} from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const DefaultTable = () => (
  <Table
    id="Table"
    header={(
      <Header>
        <HeaderCell key="NAME" minWidth="small">Name</HeaderCell>
        <HeaderCell key="ADDRESS" minWidth="medium">Address</HeaderCell>
        <HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</HeaderCell>
      </Header>
    )}
  >
    <Section key="SECTION_0" title="testSection" colSpan={3} isCollapsible>
      <Subsection key="SUBSECTION_0" title="testSubSection" colSpan={3} isCollapsible>
        <Row key="PERSON_0" isSelectable isSelected>
          <Cell key="NAME">John Smith</Cell>
          <Cell key="ADDRESS">123 Adams Drive</Cell>
          <Cell key="PHONE_NUMBER">111-222-3333</Cell>
        </Row>
        <Row key="PERSON_1" isSelectable>
          <Cell key="NAME">Jane Smith</Cell>
          <Cell key="ADDRESS">321 Drive Street</Cell>
          <Cell key="PHONE_NUMBER">111-222-3333</Cell>
        </Row>
        <Row key="PERSON_2" isSelectable>
          <Cell key="NAME">Dave Smith</Cell>
          <Cell key="ADDRESS">213 Raymond Road</Cell>
          <Cell key="PHONE_NUMBER">111-222-3333</Cell>
        </Row>
      </Subsection>
    </Section>
  </Table>
);

export default DefaultTable;
