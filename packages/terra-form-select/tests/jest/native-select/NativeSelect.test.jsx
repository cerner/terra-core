import React from 'react';
import NativeSelect from '../../../src/native-select/NativeSelect';

describe('NativeSelect', () => {
  it('should render a default NativeSelect', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with an id', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        id="test-id"
        ariaLabel="test-label"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect aria described by', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        ariaDescribedBy="test-described-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with options', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with options and defaultValue', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        defaultValue="saab"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with options and value', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        value="audi"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with onChange', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        onChange={jest.fn()}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect in filter style', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        isFilterStyle
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect as invalid', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        isInvalid
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect as disabled', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        disabled
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with opt groups', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        options={[
          {
            display: 'Swedish Cars',
            options: [
              { value: 'volvo', display: 'Volvo' },
              { value: 'saab', display: 'Saab' },
            ],
          },
          {
            display: 'German Cars',
            options: [
              { value: 'mercedes', display: 'Mercedes' },
              { value: 'audi', display: 'Audi' },
            ],
          },
        ]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect required', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        required
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect isIncomplete', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect required and isIncomplete', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        isIncomplete
        required
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with a refCallback', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        refCallback={jest.fn()}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with disabled options', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <NativeSelect
        ariaLabel="test-label"
        options={[
          { disabled: true, value: 'volvo', display: 'Volvo' },
          { disabled: true, value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
