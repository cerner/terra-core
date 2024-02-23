import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import InputField from '../../src/InputField';

describe('InputField', () => {
  it('should render a default InputField component', () => {
    const textarea = <InputField inputId="test-input" label="Label" />;
    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled InputField component', () => {
    const textarea = <InputField disabled inputId="test-input" label="Label" />;
    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled InputField component via inputAttrs', () => {
    const textarea = <InputField inputId="test-input" inputAttrs={{ disabled: true }} label="Label" />;
    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render placeholder with null when showMpageFusionPlaceholder is not passed', () => {
    const textarea = <InputField inputId="test-input" label="label" inputAttrs={{ placeholder: 'Enter The Text' }} />;
    const wrapper = enzyme.shallow(textarea);
    const placeholderInput = wrapper.find('#test-input');
    expect(placeholderInput.dive()).toMatchSnapshot();
  });

  it('should render placeholder when showMpageFusionPlaceholder is passed', () => {
    const textarea = <InputField inputId="test-input" label="label" inputAttrs={{ placeholder: 'Enter The Text', showMpageFusionPlaceholder: true }} />;
    const wrapper = enzyme.shallow(textarea);
    const placeholderInput = wrapper.find('#test-input');
    expect(placeholderInput.dive()).toMatchSnapshot();
  });

  it('should render a InputField with props', () => {
    const textarea = (
      <InputField
        inputId="test-input"
        defaultValue="Value"
        error="Text"
        errorIcon={<IconHelp />}
        help="Help"
        hideRequired
        inputAttrs={{
          name: 'test',
        }}
        type="number"
        isInline
        isInvalid
        isLabelHidden
        label="Label Test"
        labelAttrs={{
          className: 'label',
        }}
        onChange={() => { }}
        refCallback={() => { }}
        showOptional
        value="Value"
      />
    );

    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a valid InputField with props', () => {
    const textarea = (
      <InputField
        inputId="test-input"
        defaultValue="Value"
        error="Text"
        errorIcon={<IconHelp />}
        help="Help"
        hideRequired
        inputAttrs={{
          name: 'test',
        }}
        type="number"
        isInline
        isLabelHidden
        label="Label Test"
        labelAttrs={{
          className: 'label',
        }}
        onChange={() => { }}
        refCallback={() => { }}
        showOptional
        value="Value"
      />
    );

    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a InputField with type specified through InputAttributes', () => {
    const textarea = (
      <InputField
        inputId="test-input"
        defaultValue="Value"
        error="Text"
        errorIcon={<IconHelp />}
        help="Help"
        hideRequired
        inputAttrs={{
          name: 'test',
          type: 'number',
        }}
        isInline
        isInvalid
        isLabelHidden
        label="Label Test"
        labelAttrs={{
          className: 'label',
        }}
        onChange={() => { }}
        refCallback={() => { }}
        showOptional
        value="Value"
      />
    );

    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a InputField with type specified by type attribute when both type attribute and InputAttributes are given', () => {
    const type = 'text';
    const textarea = (
      <InputField
        inputId="test-input"
        defaultValue="Value"
        error="Text"
        errorIcon={<IconHelp />}
        help="Help"
        hideRequired
        inputAttrs={{
          name: 'test',
          type: 'number',
        }}
        type={type}
        isInline
        isInvalid
        isLabelHidden
        label="Label Test"
        labelAttrs={{
          className: 'label',
        }}
        onChange={() => { }}
        refCallback={() => { }}
        showOptional
        value="Value"
      />
    );

    const wrapper = enzyme.shallow(textarea);
    expect(wrapper).toMatchSnapshot();
  });
});
