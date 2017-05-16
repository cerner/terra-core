import React from 'react';
import Table from '../../src/Table';

// Constants
const subheader = <Table.Subheader content={'Subheader'} key={'SUBHEADER_0'} colSpan={4} />;

// Snapshot test
it('should render table subheader row', () => {
  const tableSubheader = shallow(subheader);
  expect(tableSubheader).toMatchSnapshot();
});
