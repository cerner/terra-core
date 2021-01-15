import React from 'react';
import PropTypes from 'prop-types';
import IconError from 'terra-icon/lib/icon/IconError';
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
  label: PropTypes.string.isRequired,
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
   * Whether the textarea can be auto-resized vertically. _(Will be ignored if size attribute is set to "full".)_
   */
  isAutoResizable: PropTypes.bool,
  /**
   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether the field displays as Invalid. Use when value does not meet validation pattern.
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
   * Function to trigger when user inputs a value. Use when programmatically setting a value. Sends parameter {Event} event.
   */
  onInput: PropTypes.func,
  /**
   * Whether or not the field is required.
   */
  required: PropTypes.bool,
  /**
   * Value to set for the rows attribute of the textarea. This takes precedence over size when
   * setting the height of the textarea.
   */
  rows: PropTypes.number,
  /**
   * The size of the textarea. _(Sizes the textarea by setting the rows attribute a corresponding preset value.)_
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
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
  /**
   * Whether or not the textarea is resizable.
   * `Disabled` textarea and the ones with size `full` are always non-resizable.
   */
  disableResize: PropTypes.bool,
};

const defaultProps = {
  defaultValue: undefined,
  disabled: false,
  error: null,
  errorIcon: <IconError />,
  help: null,
  hideRequired: false,
  isAutoResizable: false,
  inputAttrs: {},
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxWidth: undefined,
  onChange: undefined,
  onInput: undefined,
  rows: undefined,
  size: 'small',
  required: false,
  showOptional: false,
  value: undefined,
  disableResize: false,
};

const TextareaField = (props) => {
  const {
    defaultValue,
    disabled,
    disableResize,
    error,
    errorIcon,
    help,
    hideRequired,
    inputAttrs,
    inputId,
    isAutoResizable,
    isIncomplete,
    isInline,
    isInvalid,
    isLabelHidden,
    label,
    labelAttrs,
    maxWidth,
    required,
    rows,
    size,
    showOptional,
    onChange,
    onInput,
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

  if (customProps.placeholder) {
    customProps.placeholder = null;
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
        disabled={inputAttrs.disabled || disabled}
        id={inputId}
        isAutoResizable={inputAttrs.isAutoResizable || isAutoResizable}
        isIncomplete={isIncomplete}
        onChange={onChange}
        onInput={onInput}
        value={value}
        defaultValue={defaultValue}
        aria-describedby={ariaDescriptionIds}
        rows={inputAttrs.rows || rows}
        size={inputAttrs.size || size}
        disableResize={inputAttrs.disableResize || disableResize}
      />
    </Field>
  );
};

TextareaField.propTypes = propTypes;
TextareaField.defaultProps = defaultProps;

export default TextareaField;
