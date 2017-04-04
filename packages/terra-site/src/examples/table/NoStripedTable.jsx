/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from 'terra-table';

const shortid = require('shortid');

const NoStripedTable = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderContent content={'Column Heading 1'} key={shortid.generate()} minWidth={'small'} />
      <Table.HeaderContent content={'Column Heading 2'} key={shortid.generate()} minWidth={'medium'} />
      <Table.HeaderContent content={'Column Heading 3'} key={shortid.generate()} minWidth={'large'} />
    </Table.Header>
    <Table.Rows>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
      </Table.Row>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
      </Table.Row>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
        <Table.RowContent content={'Table Data'} key={shortid.generate()} />
      </Table.Row>
    </Table.Rows>
  </Table>
);

export default NoStripedTable;
