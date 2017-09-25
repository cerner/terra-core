import React from 'react';
import DefaultMenu from './DefaultMenuExample';

describe('Menu', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<DefaultMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
