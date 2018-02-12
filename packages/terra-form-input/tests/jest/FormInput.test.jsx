import React from 'react';
import FormInput from '../../src/FormInput';

describe('FormInput', () => {
  const defaultRender = <FormInput />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.form-input').text()).toEqual('');
  });

  it('should render as uncontrolled when just a default value is passed into the FormInput', () => {
    const forminput = <FormInput defaultValue="foo" />;
    const wrapper = render(forminput);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as controlled when just a default value and `onChange()` is passed into the FormInput', () => {
    const forminput = <FormInput value="foo" onChange={() => {}} />;
    const wrapper = render(forminput);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to disabled when passed into the component', () => {
    const forminput = <FormInput disabled />;
    const wrapper = render(forminput);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to invalid when isInvalid is passed into the component', () => {
    const forminput = <FormInput isInvalid />;
    const wrapper = render(forminput);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class form-input', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('form-input');
  });
});
