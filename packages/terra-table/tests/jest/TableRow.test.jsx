import React from 'react';
import { Cell, Row } from '../../src/index';

// Constants
const cellData1 = <Cell key="NAME">John Smith</Cell>;
const cellData2 = <Cell key="ADDRESS">123 Adams Drive</Cell>;
const cellData3 = <Cell key="PHONE_NUMBER">111-222-3333</Cell>;
const rowData = [cellData1, cellData2, cellData3];

// Snapshot test
it('should render a default table row', () => {
  const defaultTableRow = <Row>{rowData}</Row>;
  const tableRow = shallow(defaultTableRow);
  expect(tableRow).toMatchSnapshot();
});
