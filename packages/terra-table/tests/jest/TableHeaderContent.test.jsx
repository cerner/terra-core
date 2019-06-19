import React from 'react';
import { HeaderCell } from '../../src/index';

// Snapshot test
it('should render default table header content tag', () => {
  const defaultTableHeaderContent = <HeaderCell>Column Heading</HeaderCell>;
  const tableHeaderContent = shallow(defaultTableHeaderContent);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with ascending sort indicator', () => {
  const tableHeaderContentTag = <HeaderCell sort="asc">Column Heading</HeaderCell>;
  const tableHeaderContent = shallow(tableHeaderContentTag);
  expect(tableHeaderContent).toMatchSnapshot();
});

it('should render table header content tag with descending sort indicator', () => {
  const tableHeaderContentTag = <HeaderCell sort="desc">Column Heading</HeaderCell>;
  const tableHeaderContent = shallow(tableHeaderContentTag);
  expect(tableHeaderContent).toMatchSnapshot();
});
