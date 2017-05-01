import React from 'react';
import Table from '../../../lib/Table';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content={'Name'} key={'NAME'} minWidth={'small'} />
      <Table.HeaderCell content={'Address'} key={'ADDRESS'} minWidth={'medium'} />
      <Table.HeaderCell content={'Phone Number'} key={'PHONE_NUMBER'} minWidth={'large'} />
    </Table.Header>
    <Table.Rows className="TableRows">
      <Table.Row key={'PERSON_0'}>
        <Table.Cell content="John Smith" key="NAME" />
        <Table.Cell content="123 Adams Drive" key="ADDRESS" />
        <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
    </Table.Rows>
  </Table>
);

export default SingleRowTable;
