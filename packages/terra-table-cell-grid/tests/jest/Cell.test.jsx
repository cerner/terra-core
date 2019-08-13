import React from 'react';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default table cell', () => {
  const tableCell = shallow(<Cell />);
  expect(tableCell).toMatchSnapshot();
});

it('should render a table cell with content', () => {
  const tableCell = shallow(<Cell>Content</Cell>);
  expect(tableCell).toMatchSnapshot();
});

it('should render a table cell with refCallback', () => {
  const tableCell = shallow(
    <Cell refCallback={jest.fn()} />,
  );
  expect(tableCell).toMatchSnapshot();
});
