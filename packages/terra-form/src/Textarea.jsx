import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import Utilities from './_Utilities';
import styles from './Textarea.scss';

const cx = classNames.bind(styles);

const TEXTAREA_ROW_SIZES = {
  small: 2,
  medium: 5,
  large: 10,
};

const propTypes = {
  /**
   * The defaultValue of the textarea. Use this to create an uncontrolled textarea.
   */
  defaultValue: PropTypes.string,
  /**
   * Whether the textarea can be auto-resized horizontally.
   */
  isAutoResizable: PropTypes.bool,
  /**
   * Whether the form is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * Name of the input.
   */
  name: PropTypes.string,
  /**
   * Function to trigger when user changes the textarea value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Function to trigger when user focuses on this textarea.
   */
  onFocus: PropTypes.func,
  /**
   * Whether the input is required or not.
   */
  required: PropTypes.bool,
  /**
   * Value to set for the rows attribute of the textarea. This takes presidence over size when
   * setting the height of the textarea.
   */
  rows: PropTypes.number,
  /**
   * The size of the textarea. Sizes the textarea by setting the rows attribute to the number corresponding
   * to this value.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  /**
   * The value of the textarea. Use this to create a controlled textarea.
   */
  value: PropTypes.string,
};

const defaultProps = {
  defaultValue: undefined,
  name: null,
  isAutoResizable: false,
  isInvalid: false,
  onChange: undefined,
  required: false,
  rows: null,
  size: 'small',
  value: undefined,
};

const Textarea = ({
  name,
  required,
  onChange,
  onFocus,
  isAutoResizable,
  isInvalid,
  value,
  defaultValue,
  rows,
  size,
  ...customProps
}) => {
  const additionalTextareaProps = Object.assign({}, customProps);

  const textareaClasses = cx([
    'textarea',
    { 'form-error': isInvalid },
    { 'full-size': size === 'full' },
    additionalTextareaProps.className,
  ]);

  if (required) {
    additionalTextareaProps['aria-required'] = 'true';
  }

  const textareaRows = (rows !== undefined) ? rows : TEXTAREA_ROW_SIZES[size];
  const onFocusFunc = isAutoResizable ? Utilities.setTextareaBaseHeight(onFocus) : onFocus;
  const onChangeFunc = isAutoResizable ? Utilities.autoResizeTextareaHeight(onChange, textareaRows) : onChange;

  if (value !== undefined) {
    additionalTextareaProps.value = value;
  } else {
    additionalTextareaProps.defaultValue = defaultValue;
  }

  return (
    <textarea
      name={name}
      onFocus={onFocusFunc}
      onChange={onChangeFunc}
      required={required}
      rows={textareaRows}
      {...additionalTextareaProps}
      className={textareaClasses}
    />
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
