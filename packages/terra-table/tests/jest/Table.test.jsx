import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render a default table', () => {
  const table = shallow(
    <Table />,
  );
  expect(table).toMatchSnapshot();
});

it('should render a table without zebra stripes', () => {
  const table = shallow(
    <Table isStriped={false} />,
  );
  expect(table).toMatchSnapshot();
});

it('should render a table without padding', () => {
  const table = shallow(
    <Table isPadded={false} />,
  );
  expect(table).toMatchSnapshot();
});
