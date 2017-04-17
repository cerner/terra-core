# Terra Table

The Terra Table is a structural component to arrange content within table.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

### Table
```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content={'Column Heading 1'} key={'COLUMN_0'} minWidth={'small'} />
    <Table.HeaderCell content={'Column Heading 2'} key={'COLUMN_1'} minWidth={'medium'} />
    <Table.HeaderCell content={'Column Heading 3'} key={'COLUMN_2'} minWidth={'large'} />
  </Table.Header>
  <Table.Rows>
    <Table.Row key={'ROW_0'}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
    <Table.Row key={1}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
    <Table.Row key={2}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
  </Table.Rows>
</Table>
```
### Selectable Table
```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content={'Column Heading 1'} key={'COLUMN_0'} minWidth={'small'} />
    <Table.HeaderCell content={'Column Heading 2'} key={'COLUMN_1'} minWidth={'medium'} />
    <Table.HeaderCell content={'Column Heading 3'} key={'COLUMN_2'} minWidth={'large'} />
  </Table.Header>
  <Table.SingleSelectableRows>
    <Table.Row isSelected={true} key={'ROW_0'}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
    <Table.Row key={'ROW_1'}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
    <Table.Row key={'ROW_2'}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
  </Table.SingleSelectableRows>
</Table>
```