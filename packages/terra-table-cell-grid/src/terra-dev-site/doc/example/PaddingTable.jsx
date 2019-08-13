import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import TableCellGrid, {
  HeaderCell, CellGrid, Cell, CheckMarkCell, HeaderCheckMarkCell, HeaderChevronCell, ChevronCell,
} from 'terra-table-cell-grid/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const propTypes = {
  paddingStyle: PropTypes.string,
};

const NoPaddingTable = ({
  paddingStyle,
}) => (
  <TableCellGrid
    paddingStyle={paddingStyle}
    id="Table"
    headerCells={[
      <HeaderCheckMarkCell isSelectable isSelected isIntermediate isPadded key="derp" />,
      <HeaderCell isPadded key="NAME">Name</HeaderCell>,
      <HeaderCell isSelectable isPadded key="ADDRESS">Address</HeaderCell>,
      <HeaderCell isPadded key="PHONE_NUMBER">Phone Number</HeaderCell>,
      <HeaderChevronCell isPadded key="CHEVRON" />,
    ]}
  >
    <CellGrid selectionStyle="checkmark" isSelectable key="PERSON_0">
      {/* <CheckMarkCell isPadded key="derp" /> */}
      <Cell isPadded key="NAME">John Smith</Cell>
      <Cell isPadded key="ADDRESS">123 Adams Drive</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
      <ChevronCell isPadded key="CHEVRON" />
    </CellGrid>
    <CellGrid selectionStyle="checkmark" isSelectable isSelected key="PERSON_1">
      {/* <CheckMarkCell isSelected isPadded key="derp" /> */}
      <Cell isPadded key="NAME">Jane Smith</Cell>
      <Cell isPadded key="ADDRESS">321 Drive Street</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
    <CellGrid isSelectable key="PERSON_2">
      <CheckMarkCell isSelectable isPadded key="derp" />
      <Cell isPadded key="NAME">Dave Smith</Cell>
      <Cell isPadded key="ADDRESS">213 Raymond Road</Cell>
      <Cell isPadded key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
    <CellGrid key="PERSON_3">
      <CheckMarkCell isSelectable isSelected isPadded key="derp" />
      <Cell isPadded isSelectable key="NAME">John Smith</Cell>
      <Cell isPadded isSelectable key="ADDRESS">123 Adams Drive</Cell>
      <Cell isPadded isSelectable key="PHONE_NUMBER">111-222-3333</Cell>
    </CellGrid>
  </TableCellGrid>
);

NoPaddingTable.propTypes = propTypes;

export default NoPaddingTable;
