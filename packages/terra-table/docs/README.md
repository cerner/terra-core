# Terra Table

The Terra Table is a structural component to arrange content within a table.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app to properly function as designed.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |

<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

Terra-table provides several different components for building tables accessible through the Table component:

- Header: Indicates a primary level of hierarchy.
- SubHeader: Indicates a secondary level of hierarchy.
- HeaderCell: Renders a table header cell.
- TableRows: Wrapper to apply onClick and onKeyDown function on each child row.
- SelectableTableRows: Wrapper that allows for selection state management of each child row. Use in place of TableRows.
- SingleSelectableRows: Wrapper that handles single selection state management of each child row. Use in place of TableRows.
- MultiSelectableRows: Wrapper that handles multiple selection state management of each child row. Use in place of TableRows.
- Row: Renders a table row.
- Cell: Renders a table cell.

More information regarding managed selectable tables can be found [here](/#/components/terra-table/table/selectable-rows).

### Table

```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
    <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
  </Table.Header>
  <Table.Rows>
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

### Single Selectable Table

```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
    <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
  </Table.Header>
  <Table.SingleSelectableRows>
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
  </Table.SingleSelectableRows>
</Table>
```

### Multiple Selectable Table

```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
    <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
  </Table.Header>
  <Table.MultiSelectableRows>
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
  </Table.MultiSelectableRows>
</Table>
```

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
