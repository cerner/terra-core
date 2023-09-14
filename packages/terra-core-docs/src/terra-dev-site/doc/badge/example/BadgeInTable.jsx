import React from 'react';
import Badge from 'terra-badge';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';

const BadgeInTable = () => (
  <div>
    <Table>
      <Header>
        <HeaderCell key="NAME">Patient Name</HeaderCell>
        <HeaderCell key="ADDRESS">Location</HeaderCell>
        <HeaderCell key="PHONE_NUMBER">Status</HeaderCell>
      </Header>
      <Body>
        <Row key="PERSON_0">
          <Cell key="NAME">John Smith</Cell>
          <Cell key="ADDRESS">123 Adams Drive</Cell>
          <Cell key="BADGE">
            <Badge intent="primary" text="Active" />
          </Cell>
        </Row>
        <Row key="PERSON_1">
          <Cell key="NAME">Jane Smith</Cell>
          <Cell key="ADDRESS">321 Drive Street</Cell>
          <Cell key="BADGE"><Badge intent="negative" text="Inactive" /></Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default BadgeInTable;
