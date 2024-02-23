import React from 'react';
import Scroll from '../../lib/Scroll';

// Snapshot Tests
it('should render a default component', () => {
  const scrollable = enzyme.shallow(<Scroll />);
  expect(scrollable).toMatchSnapshot();
});

it('should render with props', () => {
  const scrollable = enzyme.shallow(<Scroll refCallback={jest.fn()}>child content</Scroll>);
  expect(scrollable).toMatchSnapshot();
});
