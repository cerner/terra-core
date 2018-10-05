# Single Selectable Rows

SingleSelectableRows is a component that allows the selection of one Terra Table `Row`. It provides a listener for when the selected row is changed.

## Usage

```jsx
import React from 'react';
import Table from 'terra-table';

<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
    <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
  </Table.Header>
  <Table.SingleSelectableRows >
    <Table.Row key="PERSON_0" isSelected>
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

### Perform an action on click

SingleSelectableRows allows you to pass an onChange handler function. This function is sent the event along with the selected index. Providing an onChange handler allows you to grab properties from an array given the index that the user selected.

```jsx
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Table from 'terra-table/lib/Table';

const people = [
  {
    key: 'PERSON_0',
    name: 'John Smith',
    address: '123 Adams Drive',
    phoneNumber: '111-222-3333',
  },
  {
    key: 'PERSON_1',
    name: 'Jane Smith',
    address: '321 Drive Street',
    phoneNumber: '111-222-3333',
  },
  {
    key: 'PERSON_2',
    name: 'Dave Smith',
    address: '213 Raymond Road',
    phoneNumber: '111-222-3333',
  },
];

const onChange = (event, selectedIndex) => {
  // eslint-disable-next-line no-alert
  alert(`Selected name: ${people[selectedIndex].name}`);
};

const SingleSelectableRowsDisableUnselectedRows = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
      <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
      <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
    </Table.Header>
    <Table.SingleSelectableRows onChange={onChange}>
      {
        people.map(person => (
          <Table.Row key={person.key}>
            <Table.Cell content={person.name} key="NAME" />
            <Table.Cell content={person.address} key="ADDRESS" />
            <Table.Cell content={person.phoneNumber} key="PHONE_NUMBER" />
          </Table.Row>
        ))
    }
    </Table.SingleSelectableRows>
  </Table>
);```
