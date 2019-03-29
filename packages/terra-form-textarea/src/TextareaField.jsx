import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';

import Textarea from './Textarea';

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
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
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
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
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
  disabled: null,
  error: null,
  errorIcon: Field.defaultProps.errorIcon,
  help: null,
  hideRequired: false,
  inputAttrs: {},
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxWidth: undefined,
  onChange: undefined,
  required: false,
  showOptional: false,
  value: undefined,
};

const TextareaField = (props) => {
  const {
    defaultValue,
    disabled,
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
    maxWidth,
    required,
    showOptional,
    onChange,
    value,
    ...customProps
  } = props;

  let ariaDescriptionIds;

  if (help && error && isInvalid) {
    ariaDescriptionIds = `${inputId}-error ${inputId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${inputId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${inputId}-error`;
    }
  }

  let isDisabled;

  if (inputAttrs.disabled) {
    isDisabled = true;
  }

  return (
    <Field
      {...customProps}
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
      maxWidth={maxWidth}
    >
      <Textarea
        {...inputAttrs}
        disabled={isDisabled || disabled}
        id={inputId}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        aria-describedby={ariaDescriptionIds}
      />
    </Field>
  );
};

TextareaField.propTypes = propTypes;
TextareaField.defaultProps = defaultProps;

export default TextareaField;
