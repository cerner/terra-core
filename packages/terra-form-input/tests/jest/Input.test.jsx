import React from 'react';
import Input from '../../src/Input';

describe('Input', () => {
  const defaultRender = <Input ariaLabel="label" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as uncontrolled when just a default value is passed into the Input', () => {
    const input = <Input defaultValue="foo" ariaLabel="label" />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a type of password and pattern prop value', () => {
    const input = <Input type="password" pattern=".{6,}" ariaLabel="label" />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render w/ placeholder text when just a placeholder prop is passed into the Input', () => {
    const input = <Input placeholder="foo" ariaLabel="label" />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as controlled when just a default value and `onChange()` is passed into the Input', () => {
    const input = <Input value="foo" onChange={() => { }} />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to disabled when passed into the component', () => {
    const input = <Input disabled />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to invalid when isInvalid is passed into the component', () => {
    const input = <Input isInvalid />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to required when required is passed into the component', () => {
    const input = <Input required />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the forminput to incomplete when isIncomplete and required is passed into the component', () => {
    const input = <Input isIncomplete required />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass in refCallback as the ref prop of the input element', () => {
    const refCallback = jest.fn();
    const wrapper = mount(<Input refCallback={refCallback} />);
    expect(refCallback).toBeCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor aria-label passed to component', () => {
    const input = <Input defaultValue="foo" aria-label="label" />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });

  it('should favor ariaLabel prop over aria-label if both props passed to component', () => {
    const input = <Input defaultValue="foo" ariaLabel="ariaLabel" aria-label="aria-label" />;
    const wrapper = shallow(input);
    expect(wrapper).toMatchSnapshot();
  });
});
