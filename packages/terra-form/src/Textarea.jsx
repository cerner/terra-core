import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Textarea.scss';

const propTypes = {
  /**
   * The defaultValue of the textarea. Use this to create an uncontrolled textarea.
   */
  defaultValue: PropTypes.string,
  /**
   * Name of the input
   */
  name: PropTypes.string,
  /**
   * Whether the input is required or not
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
  required: false,
  value: undefined,
};

const Textarea = ({
  defaultValue,
  name,
  required,
  value,
  ...customProps
}) => {
  const additionalTextareaProps = Object.assign({}, customProps);

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
      required={required}
      {...additionalTextareaProps}
      className={classNames('terra-Form-textarea', additionalTextareaProps.className)}
    />
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
