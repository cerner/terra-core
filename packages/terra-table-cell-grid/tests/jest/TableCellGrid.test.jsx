import React from 'react';
import TableCellGrid from '../../src/TableCellGrid';

// Snapshot test
it('should render a default table', () => {
  const table = shallow(
    <TableCellGrid />,
  );
  expect(table).toMatchSnapshot();
});

it('should render a table without padding', () => {
  const table = shallow(
    <TableCellGrid paddingStyle="none" />,
  );
  expect(table).toMatchSnapshot();
});

it('should render a table with refCallback', () => {
  const table = shallow(
    <TableCellGrid refCallback={jest.fn()} />,
  );
  expect(table).toMatchSnapshot();
});
