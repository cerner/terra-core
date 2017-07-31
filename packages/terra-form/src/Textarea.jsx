import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import 'terra-base/lib/baseStyles';
import styles from './Textarea.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The defaultValue of the textarea. Use this to create an uncontrolled textarea.
   */
  defaultValue: PropTypes.string,
  /**
   * Name of the input.
   */
  name: PropTypes.string,
  /**
   * Function to trigger when user changes the textarea value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required or not.
   */
  required: PropTypes.bool,
  /**
   * The value of the textarea. Use this to create a controlled textarea.
   */
  value: PropTypes.string,
};

const defaultProps = {
  defaultValue: undefined,
  name: null,
  onChange: undefined,
  required: false,
  value: undefined,
};

const Textarea = ({
  defaultValue,
  name,
  onChange,
  required,
  value,
  ...customProps
}) => {
  const additionalTextareaProps = Object.assign({}, customProps);
  const textareaClasses = cx(['textarea', additionalTextareaProps.className]);

  if (required) {
    additionalTextareaProps['aria-required'] = 'true';
  }

  if (value !== undefined) {
    additionalTextareaProps.value = value;
  } else {
    additionalTextareaProps.defaultValue = defaultValue;
  }

  return (
    <textarea
      name={name}
      onChange={onChange}
      required={required}
      {...additionalTextareaProps}
      className={textareaClasses}
    />
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
