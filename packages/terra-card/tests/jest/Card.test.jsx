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
    expect(wrapper.find('.default'));
  });

  it('should use the default variant when prop is provided just like default', () => {
    const wrapper = shallow(<Card variant="default" />);
    expect(wrapper.find('.default'));
    expect(wrapper).toMatchSnapshot();
  });

  it('should use the raised variant when prop is provided', () => {
    const wrapper = shallow(<Card variant="raised" />);
    expect(wrapper.find('.raised'));
    expect(wrapper).toMatchSnapshot();
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

  // Visually hidden text
  it('it should pass in visually hidden text', () => {
    const wrapper = shallow(<Card visuallyHiddenText="This is screen reader only text" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
