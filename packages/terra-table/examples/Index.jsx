/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import Table from '../src/Table';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TableSrc from '!raw-loader!../src/Table.jsx';

const TableExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TableSrc} />
    <Table>
      <Table.Header>
        <Table.HeaderContent display={'Column Heading 1 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} minWidth={'huge'} />
        <Table.HeaderContent display={'Column Heading 2'} key={2} minWidth={'medium'} sort={'asc'}/>
        <Table.HeaderContent display={'Column Heading 3 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} minWidth={'large'} />
      </Table.Header>
      <Table.SingleSelectableRows>
        <Table.Row isSelected isSelectable={false} key={0}>
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
        </Table.Row>
        <Table.Row isSelected key={1}>
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
        </Table.Row>
        <Table.Row isSelected={false} key={2}>
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
          <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
        </Table.Row>
      </Table.SingleSelectableRows>
    </Table>
  </div>
);

export default TableExamples;
