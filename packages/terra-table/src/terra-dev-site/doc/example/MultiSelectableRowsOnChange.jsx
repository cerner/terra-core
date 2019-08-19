import React from 'react';
import Table from 'terra-table/lib/Table';

const onChange = (event, selectedIndexes, newIndex) => {
  // eslint-disable-next-line no-alert
  alert(`Selected indexes changed. Newly changed index: ${newIndex}. Selected indexes: ${selectedIndexes}`);
};

const MultiSelectableRowsDisableUnselectedRows = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
      <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
      <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
    </Table.Header>
    <Table.MultiSelectableRows onChange={onChange}>
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
);

export default MultiSelectableRowsDisableUnselectedRows;
