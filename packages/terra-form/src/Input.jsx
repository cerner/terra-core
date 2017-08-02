import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Input.scss';

const propTypes = {
  /**
   * The defaultValue of the input field. Use this to create an uncontrolled input.
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Name of the input.
   */
  name: PropTypes.string,
  /**
   * Whether the input is required or not.
   */
  required: PropTypes.bool,
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
  name: null,
  onChange: undefined,
  required: false,
  value: undefined,
};

class Input extends React.Component {
  render() {
    const {
      defaultValue,
      name,
      onChange,
      required,
      value,
      ...customProps
    } = this.props;
    const additionalInputProps = Object.assign({}, customProps);

    if (required) {
      additionalInputProps['aria-required'] = 'true';
    }

    if (value !== undefined) {
      additionalInputProps.value = value;
    } else {
      additionalInputProps.defaultValue = defaultValue;
    }

    return (
      <input
        name={name}
        onChange={onChange}
        ref={(input) => { this.textInput = input; }}
        required={required}
        {...additionalInputProps}
        className={classNames('terra-Form-input', additionalInputProps.className)}
      />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
