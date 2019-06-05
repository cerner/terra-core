import React from 'react';
import Table, {
  Body,
  Header,
  HeaderCell,
  Row,
  Cell,
} from '../../../../index';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Header>
      <HeaderCell content="Name" key="NAME" minWidth="small" />
      <HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
      <HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
    </Header>
    <Body className="TableRows">
      <Row key="PERSON_0">
        <Cell content="John Smith" key="NAME" />
        <Cell content="123 Adams Drive" key="ADDRESS" />
        <Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Row>
    </Body>
  </Table>
);

export default SingleRowTable;
