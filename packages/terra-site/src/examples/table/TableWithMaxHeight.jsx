/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from 'terra-table';

const shortid = require('shortid');

const TableWithMaxHeight = () => (
  <Table isStriped={false}>
    <Table.Header height={'small'}>
      <Table.HeaderContent content={'Column Heading 1'} key={shortid.generate()} minWidth={'small'} />
      <Table.HeaderContent content={'Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header Very long table header End Header'} key={shortid.generate()} minWidth={'medium'} />
      <Table.HeaderContent content={'Column Heading 3'} key={shortid.generate()} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows height={'small'}>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={shortid.generate()} />
      </Table.Row>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={shortid.generate()} />
      </Table.Row>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text Very long table text End table text'} key={shortid.generate()} />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithMaxHeight;
