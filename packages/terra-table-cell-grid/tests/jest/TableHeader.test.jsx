import React from 'react';
import TableHeader from '../../src/TableHeader';
import TableHeaderCell from '../../src/TableHeaderCell';

// Snapshot test
it('should render a default table header', () => {
  const tableHeader = shallow(<TableHeader />);
  expect(tableHeader).toMatchSnapshot();
});

it('should render table header with a header cell', () => {
  const tableHeader = shallow(<TableHeader><TableHeaderCell /></TableHeader>);
  expect(tableHeader).toMatchSnapshot();
});

it('should render a table header with refCallback', () => {
  const tableHeader = shallow(
    <TableHeader refCallback={jest.fn()} />,
  );
  expect(tableHeader).toMatchSnapshot();
});
