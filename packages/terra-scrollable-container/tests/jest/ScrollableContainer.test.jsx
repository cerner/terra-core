import React from 'react';
import ScrollableContainer from '../../lib/ScrollableContainer';

// Snapshot Tests
it('should render a default component', () => {
  const scrollable = shallow(<ScrollableContainer />);
  expect(scrollable).toMatchSnapshot();
});

it('should render with props', () => {
  const scrollable = shallow(<ScrollableContainer refCallback={jest.fn()}>child content</ScrollableContainer>);
  expect(scrollable).toMatchSnapshot();
});
