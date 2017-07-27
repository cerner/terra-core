import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Input from './Input';

const propTypes = {
  /**
   * The defaultValue of the input element. Use this to create an uncontrolled input.
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
   *  Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Additional attributes to attach to the number input.
   */
  inputAttrs: PropTypes.object,
  /**
   * Id of the input. Also populates the 'htmlFor' prop of the field.
   */
  inputId: PropTypes.string,
  /**
   * Whether the field is inline.
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input.
   */
  label: PropTypes.node,
  /**
   * Attributes to attach to the label.
   */
  labelAttrs: PropTypes.object,
  /**
   * Maximum value allowed for the input.
   */
  max: PropTypes.number,
  /**
   * Minimum value allowed for the input.
   */
  min: PropTypes.number,
  /**
   * Name of the input attribute.
   */
  name: PropTypes.string,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required.
   */
  required: PropTypes.bool,
  /**
   * Incremental steps for increasing and descreasing the value.
   */
  step: PropTypes.number,
  /**
   * The defaultValue of the input element. Use this to create an uncontrolled input.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

const defaultProps = {
  defaultValue: undefined,
  error: null,
  help: null,
  inputAttrs: {},
  inputId: undefined,
  isInline: false,
  label: null,
  labelAttrs: {},
  max: null,
  min: null,
  name: null,
  onChange: undefined,
  required: false,
  step: null,
  value: undefined,
};

const NumberField = (
  {
    error,
    help,
    inputAttrs,
    inputId,
    isInline,
    label,
    labelAttrs,
    max,
    min,
    name,
    onChange,
    required,
    step,
    value,
    defaultValue,
    ...customProps
  },
) => (
  <Field
    error={error}
    label={label}
    labelAttrs={labelAttrs}
    help={help}
    htmlFor={inputId}
    isInline={isInline}
    required={required}
    {...customProps}
  >
    <Input
      type="number"
      step={step}
      max={max}
      min={min}
      required={required}
      name={name}
      id={inputId}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...inputAttrs}
    />
  </Field>
);

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;

export default NumberField;
