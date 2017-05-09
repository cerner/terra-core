// eslint-disable react/jsx-boolean-value

import React, { PropTypes } from 'react';

import Field from './Field';
import Input from './Input';

const propTypes = {
  /**
   * Additional Attributes to attach to the number input
   */
  attrs: PropTypes.object,
  /**
   * The defaultValue of the input element
   */
  defaultValue: PropTypes.number,
  /**
   * Error message for when the input is invalid
   */
  error: PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: PropTypes.node,
  /**
   * Whether the field is inline
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input
   */
  label: PropTypes.node,
  /**
   * Maximum value allowed for the input
   */
  max: PropTypes.number,
  /**
   * Minimum value allowed for the input
   */
  min: PropTypes.number,
  /**
   * Name of the input attribute
   */
  name: PropTypes.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required
   */
  required: PropTypes.bool,
  /**
   * Incremental steps for increasing and descreasing the value
   */
  step: PropTypes.number,
  /**
   * The value of the input element
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

const defaultProps = {
  attrs: {},
  defaultValue: undefined,
  error: null,
  help: null,
  isInline: false,
  label: null,
  max: null,
  min: null,
  name: null,
  onChange: () => {},
  required: true,
  step: null,
  value: undefined,
};

const NumberField = (
  {
    attrs,
    error,
    help,
    isInline,
    label,
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
    help={help}
    isInline={isInline}
    {...customProps}
  >
    <Input
      type="number"
      step={step}
      max={max}
      min={min}
      required={required}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...attrs}
    />
  </Field>
);


NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;

export default NumberField;
