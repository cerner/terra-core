import React from 'react';
import { HeaderCell } from '../../src/index';

// Snapshot test
it('should render default table header cell tag', () => {
  const shallowComponent = shallow(<HeaderCell>Column Heading</HeaderCell>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render table header cell tag with ascending sort indicator', () => {
  const shallowComponent = shallow(<HeaderCell sort="asc">Column Heading</HeaderCell>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render table header cell tag with descending sort indicator', () => {
  const shallowComponent = shallow(<HeaderCell sort="desc">Column Heading</HeaderCell>);
  expect(shallowComponent).toMatchSnapshot();
});
