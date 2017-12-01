import React from 'react';
import FormRadio from '../../src/Radio';

describe('Radio', () => {
  const defaultRender = <FormRadio />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.form-radio').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class form-radio', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('form-radio');
  });
});
