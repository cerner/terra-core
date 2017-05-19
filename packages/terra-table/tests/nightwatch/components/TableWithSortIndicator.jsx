/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from '../../../lib/Table';

const TableWithSortingIndicator = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content={'Name'} key={'NAME'} minWidth={'small'} />
      <Table.HeaderCell content={'Address'} key={'ADDRESS'} minWidth={'medium'} sort={'asc'} />
      <Table.HeaderCell content={'Phone Number'} key={'PHONE_NUMBER'} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row isSelectable key={'PERSON_0'}>
        <Table.Cell content="John Smith" key="NAME" />
        <Table.Cell content="123 Adams Drive" key="ADDRESS" />
        <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
      <Table.Row isSelectable key={'PERSON_1'}>
        <Table.Cell content="Jane Smith" key="NAME" />
        <Table.Cell content="321 Drive Street" key="ADDRESS" />
        <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
      <Table.Row isSelectable key={'PERSON_2'}>
        <Table.Cell content="Dave Smith" key="NAME" />
        <Table.Cell content="213 Raymond Road" key="ADDRESS" />
        <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithSortingIndicator;
