import React from 'react';
import Input from '../../src/Input';

describe('Input', () => {
  const defaultRender = <Input />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as uncontrolled when just a default value is passed into the Input', () => {
    const input = <Input defaultValue="foo" />;
    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render w/ placeholder text when just a placeholder prop is passed into the Input', () => {
    const input = <Input placeholder="foo" />;
    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as controlled when just a default value and `onChange()` is passed into the Input', () => {
    const input = <Input value="foo" onChange={() => {}} />;
    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to disabled when passed into the component', () => {
    const input = <Input disabled />;
    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to invalid when isInvalid is passed into the component', () => {
    const input = <Input isInvalid />;
    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to required when required is passed into the component', () => {
    const input = <Input required />;
    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });
});
