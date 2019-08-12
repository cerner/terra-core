import React from 'react';
import Table from '../../src/Table';

// Constants
const clickHandler = (e) => e;
const headerData1 = <Table.HeaderCell content="Name" key="NAME" onClick={clickHandler} />;
const headerData2 = <Table.HeaderCell content="Address" key="ADDRESS" />;
const headerData3 = <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render table header tag', () => {
  const defaultTableHeader = <Table.Header>{header}</Table.Header>;
  const tableHeader = shallow(defaultTableHeader);
  expect(tableHeader).toMatchSnapshot();
});
