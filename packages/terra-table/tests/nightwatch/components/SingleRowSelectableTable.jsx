import React from 'react';
import Table from '../../../lib/Table';

const SingleRowSelectableTable = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderContent display={'Column Heading 1'} key={1} minWidth={'small'} />
      <Table.HeaderContent display={'Column Heading 2'} key={2} minWidth={'medium'} />
      <Table.HeaderContent display={'Column Heading 3'} key={3} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row isSelected key={0}>
        <Table.RowContent display={'Row 1 Cell 1'} key={1} />
        <Table.RowContent display={'Row 1 Cell 2'} key={2} />
        <Table.RowContent display={'Row 1 Cell 3'} key={3} />
      </Table.Row>
      <Table.Row key={1}>
        <Table.RowContent display={'Row 2 Cell 1'} key={1} />
        <Table.RowContent display={'Row 2 Cell 2'} key={2} />
        <Table.RowContent display={'Row 2 Cell 3'} key={3} />
      </Table.Row>
      <Table.Row key={2}>
        <Table.RowContent display={'Row 3 Cell 1'} key={1} />
        <Table.RowContent display={'Row 3 Cell 2'} key={2} />
        <Table.RowContent display={'Row 3 Cell 3'} key={3} />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default SingleRowSelectableTable;
