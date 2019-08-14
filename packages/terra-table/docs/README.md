# Terra Table

The Terra Table structural component for creating semantic html tables.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

Terra-table provides several different components for building semantic tables:

- Header: Indicates a primary level of hierarchy.
- HeaderCell: Renders a table header cell.
- Row: Renders a table row.
- Cell: Renders a table cell.

### Table

```jsx
import React from 'react';
import Table, { Body, Header, HeaderCell, Row, Cell } from 'terra-table';

<Table isStriped={false}>
  <Header>
    <HeaderCell key="NAME" minWidth="small">Name</Table.HeaderCell>
    <HeaderCell key="ADDRESS" minWidth="medium" sort="asc">Address</Table.HeaderCell>
    <HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</Table.HeaderCell>
  </Header>
  <Body>
    <Row key="PERSON_0">
      <Cell key="NAME">John Smith</Table.Cell>
      <Cell key="ADDRESS">123 Adams Drive</Table.Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
    </Row>
    <Row key="PERSON_1">
      <Cell key="NAME">Jane Smith</Table.Cell>
      <Cell key="ADDRESS">321 Drive Street</Table.Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
    </Row>
    <Row key="PERSON_2">
      <Cell key="NAME">Dave Smith</Table.Cell>
      <Cell key="ADDRESS">213 Raymond Road</Table.Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Table.Cell>
    </Row>
  </Body>
</Table>
```

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
