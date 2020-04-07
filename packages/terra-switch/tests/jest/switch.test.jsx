import React from 'react';
import Switch from '../../src/Switch';

describe('Switch', () => {
  const defaultRender = <Switch buttonId="defaultSwitch" labelId="label1" labelText="default" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled when set', () => {
    const button = shallow(<Switch buttonId="disabledSwitch" labelId="label2" labelText="Label" disabled />);
    expect(button).toMatchSnapshot();
    expect(button.find('.slider').prop('disabled')).toBe(true);
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
