import React from 'react';
import TableCell from '../../src/TableCell';

// Snapshot test
it('should render a default table cell', () => {
  const tableCell = shallow(<TableCell />);
  expect(tableCell).toMatchSnapshot();
});

it('should render a table cell with content', () => {
  const tableCell = shallow(<TableCell>Content</TableCell>);
  expect(tableCell).toMatchSnapshot();
});

it('should render a table cell with refCallback', () => {
  const tableCell = shallow(
    <TableCell refCallback={jest.fn()} />,
  );
  expect(tableCell).toMatchSnapshot();
});
