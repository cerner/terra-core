import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Textarea.scss';

const propTypes = {
  /**
   * How many columns the textarea should have
   */
  cols: PropTypes.number,
  /**
   * Default Value of the input field. Use this to create a uncontrolled input.
   */
  defaultValue: PropTypes.string,
  /**
   * Name of the input
   */
  name: PropTypes.string,
  /**
   * Function to trigger when value of the textrea is changed.
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required or not
   */
  required: PropTypes.bool,
  /**
   * How many rows the textarea should have.
   */
  rows: PropTypes.number,
  /**
   * The value of the input field. Use this to create a controlled input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  cols: null,
  defaultValue: undefined,
  name: null,
  onChange: () => {},
  required: false,
  rows: null,
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

  if (required) {
    additionalTextareaProps['aria-required'] = 'true';
  }

  return (
    <textarea
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      value={value}
      required={required}
      aria-required={required}
      {...additionalTextareaProps}
      className={classNames('terra-Form-textarea', additionalTextareaProps.className)}
    />
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
