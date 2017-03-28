import React from 'react';
import Table from '../../src/Table';

// Constants
const headerData1 = <Table.HeaderContent display={'Column Heading'} key={1} />;
const headerData2 = <Table.HeaderContent display={'Column Heading'} key={2} />;
const headerData3 = <Table.HeaderContent display={'Column Heading'} key={3} />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render table header tag', () => {
  const defaultTableHeader = <Table.Header>{header}</Table.Header>;
  const tableHeader = shallow(defaultTableHeader);
  expect(tableHeader).toMatchSnapshot();
});
