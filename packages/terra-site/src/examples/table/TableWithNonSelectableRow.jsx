/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from 'terra-table';

const TableWithNonSelectableRow = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderContent content={'Name'} key={'NAME'} minWidth={'small'} />
      <Table.HeaderContent content={'Address'} key={'ADDRESS'} minWidth={'medium'} />
      <Table.HeaderContent content={'Phone Number'} key={'PHONE_NUMBER'} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row isSelected key={'PERSON_0'}>
        <Table.RowContent content="John Smith" key="NAME" />
        <Table.RowContent content="123 Adams Drive" key="ADDRESS" />
        <Table.RowContent content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
      <Table.Row isSelectable={false} key={'PERSON_1'}>
        <Table.RowContent content="Jane Smith" key="NAME" />
        <Table.RowContent content="321 Drive Street" key="ADDRESS" />
        <Table.RowContent content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
      <Table.Row key={'PERSON_2'}>
        <Table.RowContent content="Dave Smith" key="NAME" />
        <Table.RowContent content="213 Raymond Road" key="ADDRESS" />
        <Table.RowContent content="111-222-3333" key="PHONE_NUMBER" />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithNonSelectableRow;
