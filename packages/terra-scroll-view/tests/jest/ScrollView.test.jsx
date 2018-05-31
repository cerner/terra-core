import React from 'react';
import ScrollView from '../../lib/ScrollView';

// Snapshot Tests
it('should render a default component', () => {
  const scrollable = shallow(<ScrollView />);
  expect(scrollable).toMatchSnapshot();
});

it('should render with props', () => {
  const scrollable = shallow(<ScrollView refCallback={jest.fn()}>child content</ScrollView>);
  expect(scrollable).toMatchSnapshot();
});
