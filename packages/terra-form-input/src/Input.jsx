// added to allow this component to be class based for the input ref callback below
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
   * Whether the field is incomplete. Field must also be required.
   */
  isIncomplete: PropTypes.bool,
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
   * NOTE: The pattern attribute works with the following input types: text, date, search, url, tel, email, and password.
   */
  pattern: PropTypes.string,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
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
  /**
  * String that labels the current element. 'aria-label' must be present,
  * for accessibility.
  */
  ariaLabel: PropTypes.string,
};

const defaultProps = {
  defaultValue: undefined,
  disabled: false,
  isIncomplete: false,
  isInvalid: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: null,
  pattern: undefined,
  placeholder: undefined,
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
      isIncomplete,
      isInvalid,
      onBlur,
      onChange,
      onFocus,
      name,
      pattern,
      placeholder,
      refCallback,
      required,
      type,
      ariaLabel,
      value,
      ...customProps
    } = this.props;

    const attributes = { ...customProps };
    const formInputClassNames = cx([
      'form-input',
      { 'form-error': isInvalid },
      { 'form-incomplete': (isIncomplete && required && !isInvalid) },
      attributes.className,
    ]);

    let ariaLabelText;

    // Handle case of users setting aria-label as a custom prop
    if (attributes && Object.prototype.hasOwnProperty.call(attributes, 'aria-label')) {
      // If they've set aria-label and ariaLabel, use the ariaLabel value,
      // otherwise, fallback to using the aria-label value passed in.
      ariaLabelText = !ariaLabel ? attributes['aria-label'] : ariaLabel;
    } else if (ariaLabel) {
      // If users only set ariaLabel prop, use that value
      ariaLabelText = ariaLabel;
    }

    attributes['aria-label'] = ariaLabelText;

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
        placeholder={placeholder}
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
Input.isInput = true;

export default Input;
