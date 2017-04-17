import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render a default table row content', () => {
  const defaultTableRowContent = <Table.Cell content={'Table Data'} />;
  const tableRowContent = shallow(defaultTableRowContent);
  expect(tableRowContent).toMatchSnapshot();
});

it('should render a table row content with maximum height', () => {
  const tableRowContentTag = <Table.Cell content={'Table Data'} height={'small'} />;
  const tableRowContent = shallow(tableRowContentTag);
  expect(tableRowContent).toMatchSnapshot();
});
