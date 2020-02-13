import React from 'react';
import Switch from '../../src/Switch';

describe('Switch', () => {
  const defaultRender = <Switch labelText="default" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled when set', () => {
    const button = shallow(<Switch labelText="Label" isDisabled />);
    expect(button).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default label text when is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.label-text').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class switch', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('switch');
  });
});
