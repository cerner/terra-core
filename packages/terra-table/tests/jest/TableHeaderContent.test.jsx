import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render default table header content tag', () => {
  const defaultTableHeaderContent = <Table.HeaderContent display={'Column Heading'} />;
  const tableHeaderContent = shallow(defaultTableHeaderContent);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with ascending sort indicator', () => {
  const tableHeaderContentTag = <Table.HeaderContent display={'Column Heading'} sort={'asc'} />;
  const tableHeaderContent = shallow(tableHeaderContentTag);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with descending sort indicator', () => {
  const tableHeaderContentTag = <Table.HeaderContent display={'Column Heading'} sort={'desc'} />;
  const tableHeaderContent = shallow(tableHeaderContentTag);
  expect(tableHeaderContent).toMatchSnapshot();
});
