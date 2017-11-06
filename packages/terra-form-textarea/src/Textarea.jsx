import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

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
   * Whether the textarea is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Whether the textarea can be auto-resized vertically.
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
  disabled: false,
  name: null,
  isAutoResizable: false,
  isInvalid: false,
  onChange: undefined,
  required: false,
  rows: null,
  size: 'small',
  value: undefined,
};

class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    if (this.props.isAutoResizable) {
      this.setBaseScrollHeight();
      this.resizeTextarea();
    }
  }

  onFocus(event) {
    if (this.props.isAutoResizable) {
      this.setBaseScrollHeight();
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onChange(event) {
    if (this.props.isAutoResizable) {
      this.resizeTextarea();
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  setBaseScrollHeight() {
    // To Properly resize the textarea vertically, we need to record the initial height
    // to help with the resizing calculation.
    const savedValue = this.textarea.value;
    this.textarea.value = '';

    if (this.textarea.baseScrollHeight !== this.textarea.scrollHeight) {
      this.textarea.baseScrollHeight = this.textarea.scrollHeight;
      this.textarea.value = savedValue;
      this.resizeTextarea();
    } else {
      this.textarea.value = savedValue;
    }
  }

  resizeTextarea() {
    const lineHeight = Math.ceil(parseFloat(window.getComputedStyle(this.textarea).lineHeight, 0));
    const minRows = this.props.rows || TEXTAREA_ROW_SIZES[this.props.size];
    this.textarea.rows = minRows;
    const rows = Math.ceil((this.textarea.scrollHeight - this.textarea.baseScrollHeight) / lineHeight);
    this.textarea.rows = minRows + rows;
  }

  render() {
    const {
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
    } = this.props;

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

    const textareaRows = rows || TEXTAREA_ROW_SIZES[size];

    if (value !== undefined) {
      additionalTextareaProps.value = value;
    } else {
      additionalTextareaProps.defaultValue = defaultValue;
    }

    return (
      <textarea
        ref={(textarea) => { this.textarea = textarea; }}
        name={name}
        onFocus={this.onFocus}
        onChange={this.onChange}
        required={required}
        rows={textareaRows}
        {...additionalTextareaProps}
        className={textareaClasses}
      />
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
