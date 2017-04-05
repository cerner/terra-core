import React from 'react';
import Table from '../../../lib/Table';

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
        <Table.RowContent content={'Row 1 Cell 1'} key={shortid.generate()} />
        <Table.RowContent content={'Row 1 Cell 2'} key={shortid.generate()} />
        <Table.RowContent content={'Row 1 Cell 3'} key={shortid.generate()} />
      </Table.Row>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Row 2 Cell 1'} key={shortid.generate()} />
        <Table.RowContent content={'Row 2 Cell 2'} key={shortid.generate()} />
        <Table.RowContent content={'Row 2 Cell 3'} key={shortid.generate()} />
      </Table.Row>
      <Table.Row key={shortid.generate()}>
        <Table.RowContent content={'Row 3 Cell 1'} key={shortid.generate()} />
        <Table.RowContent content={'Row 3 Cell 2'} key={shortid.generate()} />
        <Table.RowContent content={'Row 3 Cell 3'} key={shortid.generate()} />
      </Table.Row>
    </Table.Rows>
  </Table>
);

export default NoStripedTable;
