import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Input from './Input';

const propTypes = {
  /**
   * Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.
   */
  inputId: PropTypes.string.isRequired,
  /**
   * The label of the form control children.
   */
  label: PropTypes.node.isRequired,
  /**
   * The defaultValue of the input field. Use this to create an uncontrolled input.
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Error message for when the input is invalid.
   */
  error: PropTypes.node,
  /**
   * Error Icon to display when the input is invalid.
   */
  errorIcon: PropTypes.element,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Attributes to attach to the input object
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttrs: PropTypes.object,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Ref callback to pass into the ref attribute of the html input element.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the field is required.
   */
  required: PropTypes.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * The value of the input field. Use this to create a controlled input.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

const defaultProps = {
  defaultValue: undefined,
  error: null,
  errorIcon: Field.defaultProps.errorIcon,
  help: null,
  hideRequired: false,
  inputAttrs: {},
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  onChange: undefined,
  refCallback: undefined,
  required: false,
  showOptional: false,
  value: undefined,
};

const InputField = (props) => {
  const {
    defaultValue,
    error,
    errorIcon,
    help,
    hideRequired,
    inputAttrs,
    inputId,
    isInline,
    isInvalid,
    isLabelHidden,
    label,
    labelAttrs,
    onChange,
    refCallback,
    required,
    showOptional,
    value,
    ...customProps
  } = props;

  return (
    <Field
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      errorIcon={errorIcon}
      help={help}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={inputId}
      {...customProps}
    >
      <Input
        {...inputAttrs}
        id={inputId}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        refCallback={refCallback}
      />
    </Field>
  );
};

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
