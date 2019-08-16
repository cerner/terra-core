import React from 'react';
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

const SingleSelectableRowsOnChangeAdditionalDetails = () => (
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
);

export default SingleSelectableRowsOnChangeAdditionalDetails;
