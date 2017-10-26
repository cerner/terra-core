import React from 'react';
import HorizontalDivider from '../../src/HorizontalDivider';

describe('HorizontalDivider', () => {
  const defaultRender = <HorizontalDivider />;

  // Snapshot Tests
  it('should render a basic component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<HorizontalDivider id="testDivider" />);
    expect(wrapper).toMatchSnapshot();
  });
});
