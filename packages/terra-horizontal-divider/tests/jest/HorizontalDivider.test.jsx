import React from 'react';
import HorizontalDivider from '../../src/HorizontalDivider';

describe('HorizontalDivider', () => {
  const defaultRender = <HorizontalDivider />;

  // Snapshot Tests
  it('should render a basic component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class divider', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('divider');
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<HorizontalDivider id="testDivider" />);
    expect(wrapper.unrendered.props.id).toEqual('testDivider');
  });
});
