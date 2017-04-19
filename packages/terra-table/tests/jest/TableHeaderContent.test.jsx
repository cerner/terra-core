import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render default table header content tag', () => {
  const defaultTableHeaderContent = <Table.HeaderCell content={'Column Heading'} />;
  const tableHeaderContent = shallow(defaultTableHeaderContent);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with ascending sort indicator', () => {
  const tableHeaderContentTag = <Table.HeaderCell content={'Column Heading'} sort={'asc'} />;
  const tableHeaderContent = shallow(tableHeaderContentTag);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with descending sort indicator', () => {
  const tableHeaderContentTag = <Table.HeaderCell content={'Column Heading'} sort={'desc'} />;
  const tableHeaderContent = shallow(tableHeaderContentTag);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with maximum height fixed', () => {
  const defaultTableHeaderContent = <Table.HeaderCell content={'Column Heading'} />;
  const tableHeaderContent = shallow(defaultTableHeaderContent);
  expect(tableHeaderContent).toMatchSnapshot();
});
