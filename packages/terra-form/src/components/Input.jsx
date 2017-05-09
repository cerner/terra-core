import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Input.scss';

const propTypes = {
  /**
   * The defaultValue of the input field. Use this to create an uncontrolled input
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Name of the input
   */
  name: PropTypes.string,
  /**
   * Functional to be called when the input is changed
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required or not
   */
  required: PropTypes.bool,
  /**
   * The value of the input field. Use this to create a controlled input
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

const defaultProps = {
  defaultValue: undefined,
  name: null,
  onChange: () => {},
  required: false,
  value: undefined,
};

const Input = ({
  defaultValue,
  name,
  onChange,
  required,
  value,
  ...customProps
}) => {
  const additionalInputProps = Object.assign({}, customProps);

  if (required) {
    additionalInputProps['aria-required'] = 'true';
  }

  return (
    <input
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      value={value}
      required={required}
      {...additionalInputProps}
      className={classNames('terra-Form-input', additionalInputProps.className)}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
