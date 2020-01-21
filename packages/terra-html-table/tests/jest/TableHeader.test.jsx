import React from 'react';
import { HeaderCell, Header } from '../../src/index';

// Constants
const headerData1 = <HeaderCell key="NAME" onClick={jest.fn()}>Name</HeaderCell>;
const headerData2 = <HeaderCell key="ADDRESS">Address</HeaderCell>;
const headerData3 = <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render table header tag', () => {
  const shallowComponent = shallow(<Header>{header}</Header>);
  expect(shallowComponent).toMatchSnapshot();
});
