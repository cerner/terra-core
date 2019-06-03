import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Table from 'terra-table/lib/Table';

const CustomCell = props => (
  <div>
    <h3>{props.text}</h3>
    {props.subtext ? <h4 style={{ color: '#656565' }}>{props.subtext}</h4> : null}
  </div>
);

CustomCell.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.string,
};

const TableWithCustomCells = () => (
  <Table>
    <Table.Header>
      <Table.HeaderCell key="NAME" minWidth="small">Name</Table.HeaderCell>
      <Table.HeaderCell key="ADDRESS" minWidth="medium">Address</Table.HeaderCell>
      <Table.HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</Table.HeaderCell>
    </Table.Header>
    <Table.Body>
      <Table.Row key="PERSON_0">
        <Table.Cell key="NAME">
          <CustomCell text="John Smith" subtext="Super Cool Person" />
        </Table.Cell>
        <Table.Cell key="ADDRESS">
          <CustomCell text="123 Adams Drive" subtext="Missouri" />
        </Table.Cell>
        <Table.Cell key="PHONE_NUMBER">
          <CustomCell text="111-222-3333" subtext="Home" />
        </Table.Cell>
      </Table.Row>
      <Table.Row key="PERSON_1">
        <Table.Cell key="NAME">
          <CustomCell text="Jane Smith" subtext="Super Cool Person" />
        </Table.Cell>
        <Table.Cell key="ADDRESS">
          <CustomCell text="321 Drive Street" subtext="Kansas" />
        </Table.Cell>
        <Table.Cell key="PHONE_NUMBER">
          <CustomCell text="111-222-3333" subtext="Cell" />
        </Table.Cell>
      </Table.Row>
      <Table.Row key="PERSON_2">
        <Table.Cell key="NAME">
          <CustomCell text="Dave Smith" subtext="Not Super Cool At All" />
        </Table.Cell>
        <Table.Cell key="ADDRESS">
          <CustomCell text="213 Raymond Road" subtext="Alaska" />
        </Table.Cell>
        <Table.Cell key="PHONE_NUMBER">
          <CustomCell text="111-222-3333" subtext="Work" />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableWithCustomCells;
