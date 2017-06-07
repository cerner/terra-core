import React from 'react';
import Table from '../../../lib/Table';

const SingleRowTable = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content={'Name'} key={'NAME'} minWidth={'small'} />
      <Table.HeaderCell content={'Address'} key={'ADDRESS'} minWidth={'medium'} />
      <Table.HeaderCell content={'Phone Number'} key={'PHONE_NUMBER'} minWidth={'large'} />
    </Table.Header>
    <Table.Rows className="TableRows" />
  </Table>
);

export default SingleRowTable;
