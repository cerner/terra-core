import React from 'react';
import TableHeaderCell from '../../src/TableHeaderCell';

// Snapshot test
it('should render default table header cell', () => {
  const tableHeaderCell = shallow(<TableHeaderCell />);
  expect(tableHeaderCell).toMatchSnapshot();
});

it('should render a table header with content', () => {
  const tableHeaderCell = shallow(<TableHeaderCell>Content</TableHeaderCell>);
  expect(tableHeaderCell).toMatchSnapshot();
});

it('should render table header cell with ascending sort indicator', () => {
  const tableHeaderCell = shallow(<TableHeaderCell sort="asc" />);
  expect(tableHeaderCell).toMatchSnapshot();
});

it('should render table header cell descending sort indicator', () => {
  const tableHeaderCell = shallow(<TableHeaderCell sort="desc" />);
  expect(tableHeaderCell).toMatchSnapshot();
});

it('should render table header cell with minWideth', () => {
  const tableHeaderCell = shallow(<TableHeaderCell minWidth="tiny" />);
  expect(tableHeaderCell).toMatchSnapshot();
});

it('should render a table header cell with refCallback', () => {
  const tableHeaderCell = shallow(
    <TableHeaderCell refCallback={jest.fn()} />,
  );
  expect(tableHeaderCell).toMatchSnapshot();
});
