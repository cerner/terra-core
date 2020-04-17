import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NativeSelectField from '../../../src/native-select/NativeSelectField';

describe('NativeSelectField', () => {
  it('should render a default NativeSelectField', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField as optional', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        showOptional
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with an aria label', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        ariaLabel="test-label"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField aria described by', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        ariaDescribedBy="test-described-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with help', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        help={<p>test help</p>}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with error', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        error={<p>test error</p>}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a maxWidth', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        maxWidth="100px"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a labelAttrs', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        labelAttrs={{ 'data-test-attr': 'label' }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a selectAttrs', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        selectAttrs={{ 'data-test-attr': 'select' }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with options', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
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

  it('should render a NativeSelectField with options and defaultValue', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
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

  it('should render a NativeSelectField with options and value', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
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

  it('should render a NativeSelectField with onChange', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        onChange={jest.fn()}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a default placeholder', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        placeholder={{}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a custom  placeholder', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        placeholder={{ display: 'test-placeholder-display', value: 'test-placeholder-value' }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField allowing clear', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        placeholder={{ allowClear: true }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField as invalid', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        invalid
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField as disabled', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        disabled
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with opt groups', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
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

  it('should render a NativeSelectField required', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        required
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField required', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        required
        hideRequired
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField isIncomplete', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        required
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField required and isIncomplete', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
        label="test-label"
        required
        isIncomplete
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
