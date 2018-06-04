import React from 'react';
import Scroll from '../../lib/Scroll';

// Snapshot Tests
it('should render a default component', () => {
  const scrollable = shallow(<Scroll />);
  expect(scrollable).toMatchSnapshot();
});

it('should render with props', () => {
  const scrollable = shallow(<Scroll refCallback={jest.fn()}>child content</Scroll>);
  expect(scrollable).toMatchSnapshot();
});
