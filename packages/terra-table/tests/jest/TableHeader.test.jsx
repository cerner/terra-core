import React from 'react';
import Table from '../../src/Table';

const shortid = require('shortid');

// Constants
const headerData1 = <Table.HeaderContent content={'Column Heading'} key={shortid.generate()} />;
const headerData2 = <Table.HeaderContent content={'Column Heading'} key={shortid.generate()} />;
const headerData3 = <Table.HeaderContent content={'Column Heading'} key={shortid.generate()} />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render table header tag', () => {
  const defaultTableHeader = <Table.Header>{header}</Table.Header>;
  const tableHeader = shallow(defaultTableHeader);
  expect(tableHeader).toMatchSnapshot();
});
