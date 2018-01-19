import React from 'react';
import Dialog from '../../src/Dialog';

describe('Dialog', () => {
  const defaultRender = <Dialog />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.dialog').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class dialog', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('dialog');
  });
});
