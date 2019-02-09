import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render a default table', () => {
  const table = shallow(
    <Table />,
  );
  expect(table).toMatchSnapshot();
});

it('should render a table without padding', () => {
  const table = shallow(
    <Table paddingStyle="none" />,
  );
  expect(table).toMatchSnapshot();
});

it('should render a table with refCallback', () => {
  const table = shallow(
    <Table refCallback={jest.fn()} />,
  );
  expect(table).toMatchSnapshot();
});
