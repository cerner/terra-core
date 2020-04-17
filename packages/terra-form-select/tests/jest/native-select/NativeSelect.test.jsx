import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import NativeSelect from '../../../src/native-select/NativeSelect';

describe('NativeSelect', () => {
  it('should render a default NativeSelect', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with an aria label', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        ariaLabel="test-label"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect aria described by', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        ariaDescribedBy="test-described-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with options', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
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
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
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
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        value="audi"
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

  it('should render a NativeSelect with onChange', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        onChange={jest.fn()}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with a default placeholder', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        placeholder={{}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with a custom placeholder', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        placeholder={{ display: 'test-placeholder-display', value: 'test-placeholder-value' }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect allowing clear', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        placeholder={{ allowClear: true }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect as invalid', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        isInvalid
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect as disabled', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        disabled
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect with opt groups', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        options={[
          {
            display: 'Swedish Cars',
            childOptions: [
              { value: 'volvo', display: 'Volvo' },
              { value: 'saab', display: 'Saab' },
            ],
          },
          {
            display: 'German Cars',
            childOptions: [
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
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        required
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect isIncomplete', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        required
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelect required and isIncomplete', () => {
    const wrapper = mountWithIntl(
      <NativeSelect
        id="test-id"
        required
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
