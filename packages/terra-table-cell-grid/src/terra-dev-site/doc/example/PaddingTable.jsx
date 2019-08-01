import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderCell, Row, Cell, CheckMarkCell, HeaderCheckMarkCell,
} from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const propTypes = {
  paddingStyle: PropTypes.string,
};

const NoPaddingTable = ({
  paddingStyle,
}) => (
  <Table
    paddingStyle={paddingStyle}
    id="Table"
    headerCells={[
      <HeaderCheckMarkCell isPadded key="derp" />,
      <HeaderCell isPadded key="NAME">Name</HeaderCell>,
      <HeaderCell isPadded key="ADDRESS">Address</HeaderCell>,
      <HeaderCell isPadded key="PHONE_NUMBER">Phone Number</HeaderCell>,
    ]}
  >
    <Row key="PERSON_0">
      <CheckMarkCell isPadded key="derp" />
      <Cell isPadded key="NAME">John Smith</Cell>
      <Cell isPadded key="ADDRESS">123 Adams Drive</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_1">
      <CheckMarkCell isPadded key="derp" />
      <Cell isPadded key="NAME">Jane Smith</Cell>
      <Cell isPadded key="ADDRESS">321 Drive Street</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_2">
      <CheckMarkCell isPadded key="derp" />
      <Cell isPadded key="NAME">Dave Smith</Cell>
      <Cell isPadded key="ADDRESS">213 Raymond Road</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
  </Table>
);

NoPaddingTable.propTypes = propTypes;

export default NoPaddingTable;
