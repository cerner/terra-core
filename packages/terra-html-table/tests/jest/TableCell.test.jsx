import React from 'react';
import { Cell } from '../../src/index';

// Snapshot test
it('should render a default table cell', () => {
  const shallowComponent = enzyme.shallow(<Cell>Table Data</Cell>);
  expect(shallowComponent).toMatchSnapshot();
});
