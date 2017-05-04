/* eslint-disable import/no-extraneous-dependencies */
import React, { PropTypes } from 'react';
import Table from 'terra-table';

const CustomCell = props => (
  <div>
    <h3>{props.text}</h3>
    {props.subtext ? <h4 style={{ color: 'grey' }}>{props.subtext}</h4> : null}
  </div>
);

CustomCell.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.string,
};

const TableWithCustomCells = () => (
  <Table>
    <Table.Header>
      <Table.HeaderCell content={'Name'} key={'NAME'} minWidth={'small'} />
      <Table.HeaderCell content={'Address'} key={'ADDRESS'} minWidth={'medium'} />
      <Table.HeaderCell content={'Phone Number'} key={'PHONE_NUMBER'} minWidth={'large'} />
    </Table.Header>
    <Table.SingleSelectableRows>
      <Table.Row isSelected isSelectable key={'PERSON_0'}>
        <Table.Cell content={<CustomCell text="John Smith" subtext="Super Cool Person" />} key="NAME" />
        <Table.Cell content={<CustomCell text="123 Adams Drive" subtext="Missouri" />} key="ADDRESS" />
        <Table.Cell content={<CustomCell text="111-222-3333" subtext="Home" />} key="PHONE_NUMBER" />
      </Table.Row>
      <Table.Row isSelectable key={'PERSON_1'}>
        <Table.Cell content={<CustomCell text="Jane Smith" subtext="Super Cool Person" />} key="NAME" />
        <Table.Cell content={<CustomCell text="321 Drive Street" subtext="Kansas" />} key="ADDRESS" />
        <Table.Cell content={<CustomCell text="111-222-3333" subtext="Cell" />} key="PHONE_NUMBER" />
      </Table.Row>
      <Table.Row isSelectable key={'PERSON_2'}>
        <Table.Cell content={<CustomCell text="Dave Smith" subtext="Not Super Cool At All" />} key="NAME" />
        <Table.Cell content={<CustomCell text="213 Raymond Road" subtext="Alaska" />} key="ADDRESS" />
        <Table.Cell content={<CustomCell text="111-222-3333" subtext="Work" />} key="PHONE_NUMBER" />
      </Table.Row>
    </Table.SingleSelectableRows>
  </Table>
);

export default TableWithCustomCells;
