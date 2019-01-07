import React from 'react';
import TableRow from '../../src/TableRow';
import TableCell from '../../src/TableCell';

// Snapshot test
it('should render a default table row', () => {
  const tableRow = shallow(<TableRow />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a table row with a cell', () => {
  const tableRow = shallow(<TableRow><TableCell /></TableRow>);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selectable table row', () => {
  const tableRow = shallow(<TableRow isSelectable />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selected table row', () => {
  const tableRow = shallow(<TableRow isSelected />);
  expect(tableRow).toMatchSnapshot();
});
