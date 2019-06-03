# Terra Table

The Terra Table is a structural component to arrange content within a table.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

Terra-table provides several different components for building semantic tables:

- Header: Indicates a primary level of hierarchy.
- HeaderCell: Renders a table header cell.
- Row: Renders a table row.
- Cell: Renders a table cell.

### Table

```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell key="NAME" minWidth="small">Name</Table.HeaderCell>
    <Table.HeaderCell key="ADDRESS" minWidth="medium" sort="asc">Address</Table.HeaderCell>
    <Table.HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</Table.HeaderCell>
  </Table.Header>
  <Table.Body>
    <Table.Row key="PERSON_0">
      <Table.Cell key="NAME">John Smith</Table.Cell>
      <Table.Cell key="ADDRESS">123 Adams Drive</Table.Cell>
      <Table.Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
    </Table.Row>
    <Table.Row key="PERSON_1">
      <Table.Cell key="NAME">Jane Smith</Table.Cell>
      <Table.Cell key="ADDRESS">321 Drive Street</Table.Cell>
      <Table.Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
    </Table.Row>
    <Table.Row key="PERSON_2">
      <Table.Cell key="NAME">Dave Smith</Table.Cell>
      <Table.Cell key="ADDRESS">213 Raymond Road</Table.Cell>
      <Table.Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
