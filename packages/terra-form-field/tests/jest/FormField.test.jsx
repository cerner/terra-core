import React from 'react';
import FormField from '../../src/FormField';

describe('FormField', () => {
  const defaultRender = <FormField />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.form-field').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class form-field', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('form-field');
  });
});
