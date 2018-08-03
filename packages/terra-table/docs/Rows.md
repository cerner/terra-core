# TableRows

Rows is the standard component used for managing Terra Table `Row`s. It offers no selection capabilities but will apply listeners to children rows for clicking and key presses.

Using Rows or an extension of Rows (Selctable Rows, Single Selectable Rows, or Multi Selectable Rows) to organize a table is required for proper appearance of the table.

## Usage

```jsx
import React from 'react';
import Table from 'terra-table';

const onClick = () => {
  alert('I\'ve been clicked!');
};

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
    <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
  </Table.Header>
  <Table.Rows onClick={onClick}>
    <Table.Row key="PERSON_0">
      <Table.Cell content="John Smith" key="NAME" />
      <Table.Cell content="123 Adams Drive" key="ADDRESS" />
      <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
    </Table.Row>
    <Table.Row key="PERSON_1">
      <Table.Cell content="Jane Smith" key="NAME" />
      <Table.Cell content="321 Drive Street" key="ADDRESS" />
      <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
    </Table.Row>
    <Table.Row key="PERSON_2">
      <Table.Cell content="Dave Smith" key="NAME" />
      <Table.Cell content="213 Raymond Road" key="ADDRESS" />
      <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
    </Table.Row>
  </Table.Rows>
</Table>
```