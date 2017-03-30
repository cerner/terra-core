import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render a default table row content', () => {
  const defaultTableRowContent = <Table.RowContent content={'Table Data'} key={1} />;
  const tableRowContent = shallow(defaultTableRowContent);
  expect(tableRowContent).toMatchSnapshot();
});

it('should render a table row content with maximum height', () => {
  const tableRowContentTag = <Table.RowContent content={'Table Data'} height={'small'} key={1} />;
  const tableRowContent = shallow(tableRowContentTag);
  expect(tableRowContent).toMatchSnapshot();
});
