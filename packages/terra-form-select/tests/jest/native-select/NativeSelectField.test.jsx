import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NativeSelectField from '../../../src/native-select/NativeSelectField';

describe('NativeSelectField', () => {
  it('should render a default NativeSelectField', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField as optional', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        selectId="test-id"
        showOptional
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField aria described by', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        ariaDescribedBy="test-described-id"
        label="test-label"
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with help', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        help={<p>test help</p>}
        label="test-label"
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with error', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        error={<p>test error</p>}
        label="test-label"
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a maxWidth', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        maxWidth="100px"
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a labelAttrs', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        labelAttrs={{ 'data-test-attr': 'label' }}
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with a selectAttrs', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        selectAttrs={{ 'data-test-attr': 'select' }}
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with options', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with options and defaultValue', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        defaultValue="saab"
        label="test-label"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with options and value', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        options={[
          { value: 'volvo', display: 'Volvo' },
          { value: 'saab', display: 'Saab' },
          { value: 'mercedes', display: 'Mercedes' },
          { value: 'audi', display: 'Audi' },
        ]}
        selectId="test-id"
        value="audi"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with onChange', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        onChange={jest.fn()}
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField as invalid', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
        invalid
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField as disabled', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        disabled
        label="test-label"
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField with opt groups', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        label="test-label"
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
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField required', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        isIncomplete
        label="test-label"
        required
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField required', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        hideRequired
        isIncomplete
        label="test-label"
        required
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField isIncomplete', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        isIncomplete
        label="test-label"
        required
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NativeSelectField required and isIncomplete', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        isIncomplete
        label="test-label"
        required
        selectId="test-id"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
