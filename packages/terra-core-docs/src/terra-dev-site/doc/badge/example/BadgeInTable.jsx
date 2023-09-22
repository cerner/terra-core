import React from 'react';
import Badge from 'terra-badge';
import IconHelpInverse from 'terra-icon/lib/icon/IconHelpInverse';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';

const Icon = <IconHelpInverse/>

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
            <Badge intent="positive" text="Active" />
          </Cell>
        </Row>
        <Row key="PERSON_1">
          <Cell key="NAME">Jane Smith</Cell>
          <Cell key="ADDRESS">321 Drive Street</Cell>
          <Cell key="BADGE">
            <Badge intent="negative" size="large" text="Inactive" />
            <Badge intent="info" icon={Icon} text="Verification Pending" visuallyHiddenText="Please check back in 2-4 business days"/>
          </Cell>
        </Row>
        <Row key="PERSON_2">
          <Cell key="NAME">Jason Tyler</Cell>
          <Cell key="ADDRESS">213 Scuba Drive</Cell>
          <Cell key="BADGE">
            <Badge intent="primary" size="large" text="Active" />
            <Badge intent="warning" text="Order Pending"/>
          </Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default BadgeInTable;
