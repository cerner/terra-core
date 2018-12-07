// added to allow this component to be class based for the input ref callback below
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * Whether the input is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Function to trigger when the input loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Function to trigger when the input gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Content to be displayed as the name.
   */
  name: PropTypes.string,
  /**
   * The regular expression that the input's value is checked against.
   */
  pattern: PropTypes.string,
  /**
   * Callback ref to pass into the input dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Whether the input is required.
   */
  required: PropTypes.bool,
  /**
   * Specifies the type of input element to display.
   */
  type: PropTypes.string,
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
  disabled: false,
  isInvalid: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: null,
  pattern: undefined,
  required: false,
  refCallback: undefined,
  type: undefined,
  value: undefined,
};

class Input extends React.Component {
  render() {
    const {
      defaultValue,
      disabled,
      isInvalid,
      onBlur,
      onChange,
      onFocus,
      name,
      pattern,
      refCallback,
      required,
      type,
      value,
      ...customProps
    } = this.props;

    const attributes = Object.assign({}, customProps);
    const formInputClassNames = cx([
      'form-input',
      { 'form-error': isInvalid },
      attributes.className,
    ]);

    if (required) {
      attributes['aria-required'] = 'true';
    }

    if (value !== undefined) {
      attributes.value = value;
    } else {
      attributes.defaultValue = defaultValue;
    }

    return (
      <input
        {...attributes}
        ref={(inputRef) => {
          if (refCallback) refCallback(inputRef);
        }}
        name={name}
        type={type}
        pattern={pattern}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        className={formInputClassNames}
      />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
