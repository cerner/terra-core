import React from 'react';
import Table from '../../src/Table';

// Constants
const headerData1 = <Table.HeaderContent content={'Name'} key={'NAME'} />;
const headerData2 = <Table.HeaderContent content={'Address'} key={'ADDRESS'} />;
const headerData3 = <Table.HeaderContent content={'Phone Number'} key={'PHONE_NUMBER'} />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render table header tag', () => {
  const defaultTableHeader = <Table.Header>{header}</Table.Header>;
  const tableHeader = shallow(defaultTableHeader);
  expect(tableHeader).toMatchSnapshot();
});
