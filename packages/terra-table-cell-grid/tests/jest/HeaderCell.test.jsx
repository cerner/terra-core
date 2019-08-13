import React from 'react';
import HeaderCell from '../../src/HeaderCell';

// Snapshot test
it('should render default header cell', () => {
  const headerCell = shallow(<HeaderCell />);
  expect(headerCell).toMatchSnapshot();
});

it('should render a header cell with content', () => {
  const headerCell = shallow(<HeaderCell>Content</HeaderCell>);
  expect(headerCell).toMatchSnapshot();
});

it('should render header cell with ascending sort indicator', () => {
  const headerCell = shallow(<HeaderCell sort="asc" />);
  expect(headerCell).toMatchSnapshot();
});

it('should render header cell descending sort indicator', () => {
  const headerCell = shallow(<HeaderCell sort="desc" />);
  expect(headerCell).toMatchSnapshot();
});

it('should render header cell with minWideth', () => {
  const headerCell = shallow(<HeaderCell minWidth="tiny" />);
  expect(headerCell).toMatchSnapshot();
});

it('should render a header cell with refCallback', () => {
  const headerCell = shallow(
    <HeaderCell refCallback={jest.fn()} />,
  );
  expect(headerCell).toMatchSnapshot();
});
