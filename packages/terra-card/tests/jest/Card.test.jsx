import React from 'react';
import Card from '../../src/Card';

describe('Card', () => {
  const defaultRender = <Card />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.card'));
  });

  // Structure Tests
  it('should have the class card', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('card');
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<Card id="testCard" />);
    expect(wrapper.props().id).toEqual('testCard');
  });
});
