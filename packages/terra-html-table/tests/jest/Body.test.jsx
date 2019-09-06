import React from 'react';
import { Cell, Row, Body } from '../../src/index';

// Constants
const cellData1 = <Cell key="NAME">John Smith</Cell>;
const cellData2 = <Cell key="ADDRESS">123 Adams Drive</Cell>;
const cellData3 = <Cell key="PHONE_NUMBER">111-222-3333</Cell>;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Row key="PERSON_0">{rowData}</Row>;
const row2 = <Row key="PERSON_1">{rowData}</Row>;
const rows = [row1, row2];

// Snapshot test
it('should render Body tag', () => {
  const shallowComponent = shallow(<Body>{rows}</Body>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render Body with no rows', () => {
  const shallowComponent = shallow(<Body />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render Body with one row', () => {
  const shallowComponent = shallow(<Body>{[row1]}</Body>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render Body with multiple rows', () => {
  const shallowComponent = shallow(<Body>{rows}</Body>);
  expect(shallowComponent).toMatchSnapshot();
});
