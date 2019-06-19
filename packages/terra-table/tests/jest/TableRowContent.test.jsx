import React from 'react';
import { Cell } from '../../src/index';

// Snapshot test
it('should render a default table row content', () => {
  const defaultTableRowContent = <Cell>Table Data</Cell>;
  const tableRowContent = shallow(defaultTableRowContent);
  expect(tableRowContent).toMatchSnapshot();
});
