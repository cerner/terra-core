import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Textarea.module.scss';

const cx = classNamesBind.bind(styles);

const isMobileDevice = () => window.matchMedia('(max-width: 1024px)').matches
  && (
    'ontouchstart' in window
    // eslint-disable-next-line no-undef
    || (window.DocumentTouch && document instanceof DocumentTouch)
    || navigator.maxTouchPoints > 0 // eslint-disable-line compat/compat
    || navigator.msMaxTouchPoints > 0
  );

const TextareaSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full',
};

const TEXTAREA_ROW_SIZES = {
  small: 2,
  medium: 5,
  large: 10,
};
const propTypes = {
  /**
  * String that labels the current element. 'aria-label' must be present,
  * for accessibility.
  */
  ariaLabel: PropTypes.string,
  /**
   * The defaultValue of the textarea. Use this to create an uncontrolled textarea.
   */
  defaultValue: PropTypes.string,
  /**
   * Whether the textarea is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Whether the textarea can be auto-resized vertically. _(Will be ignored if size attribute is set to "full".)_
   */
  isAutoResizable: PropTypes.bool,
  /**
   * Whether the text area displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the text area displays as Invalid. Use when value does not meet validation pattern.
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
   * Placeholder text.
   */
  placeholder: PropTypes.string,
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
   * The size of the textarea. _(Sizes the textarea by setting the rows attribute a corresponding preset value.)_
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  /**
   * The value of the textarea. Use this to create a controlled textarea.
   */
  value: PropTypes.string,
  /**
   * Function callback for the ref of the textarea. Useful for advanced
   * functionality such as managing focus, selection, or animations.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the textarea is resizable.
   * `Disabled` textarea and the ones with size `full` are always non-resizable.
   */
  disableResize: PropTypes.bool,

};

const defaultProps = {
  defaultValue: undefined,
  disabled: false,
  name: null,
  isAutoResizable: false,
  isIncomplete: false,
  isInvalid: false,
  onChange: undefined,
  placeholder: undefined,
  required: false,
  rows: null,
  size: 'small',
  value: undefined,
  refCallback: undefined,
  disableResize: false,
};

class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.isMobileDevice = isMobileDevice();
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    const lineHeight = Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight, 0));
    this.textarea.currentLineHeight = lineHeight;
    this.setBaseHeights();

    if (this.props.isAutoResizable && !this.isMobileDevice) {
      this.resizeTextarea();
    }
  }

  // Addresses https://github.com/cerner/terra-core/issues/2496.
  // min-height manipulation exists outside the virtual dom. React reconcilliation will fail to update this inline style, because it is not a prop.
  // This is apparent when swapping different sized TextArea components. To alleviate this, first reset the min-height.
  // This allows us to capture the correct scrollHeight, and use this correct value for min-height.
  componentDidUpdate(prevProps) {
    if (this.props.size !== prevProps.size || this.props.rows !== prevProps.rows) {
      this.setBaseHeights();
    }
  }

  onFocus(event) {
    if (this.props.isAutoResizable && !this.isMobileDevice) {
      const lineHeight = Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight, 0));

      if (this.textarea.currentLineHeight !== lineHeight) {
        this.textarea.currentLineHeight = lineHeight;
        this.setBaseHeights();
      }
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onChange(event) {
    if (this.props.isAutoResizable && !this.isMobileDevice) {
      this.resizeTextarea();
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  setBaseHeights() {
    // To Properly resize the textarea vertically, we need to record the initial height
    // to help with the resizing calculation.
    const savedValue = this.textarea.value;
    this.textarea.value = '';
    this.textarea.baseScrollHeight = this.textarea.scrollHeight;

    // For terra textareas, we want the gripper to not have the ability to resize the textarea to
    // be a tiny square. Setting the minHeight restricts the area the gripper can be shrunk too
    this.textarea.style.minHeight = '0px';
    this.textarea.style.minHeight = `${this.textarea.scrollHeight}px`;
    this.textarea.value = savedValue;
  }

  resizeTextarea() {
    const minRows = this.props.rows || TEXTAREA_ROW_SIZES[this.props.size];
    this.textarea.rows = minRows;
    const rows = Math.ceil((this.textarea.scrollHeight - this.textarea.baseScrollHeight) / this.textarea.currentLineHeight);
    this.textarea.rows = minRows + rows;
  }

  render() {
    const {
      name,
      required,
      onChange,
      onFocus,
      placeholder,
      isAutoResizable,
      isIncomplete,
      isInvalid,
      value,
      defaultValue,
      rows,
      size,
      ariaLabel,
      refCallback,
      disableResize,
      ...customProps
    } = this.props;

    const theme = this.context;

    const additionalTextareaProps = { ...customProps };

    const textareaClasses = classNames(
      cx(
        'textarea',
        { 'form-error': isInvalid },
        { 'form-incomplete': (isIncomplete && required && !isInvalid) },
        { 'full-size': size === 'full' },
        { resizable: isAutoResizable && !this.isMobileDevice },
        { 'no-resize': disableResize },
        theme.className,
      ),
      additionalTextareaProps.className,
    );

    let ariaLabelText;

    // Handle case of users setting aria-label as a custom prop
    if (additionalTextareaProps && Object.prototype.hasOwnProperty.call(additionalTextareaProps, 'aria-label')) {
      // If they've set aria-label and ariaLabel, use the ariaLabel value,
      // otherwise, fallback to using the aria-label value passed in.
      ariaLabelText = !ariaLabel ? additionalTextareaProps['aria-label'] : ariaLabel;
    } else if (ariaLabel) {
      // If users only set ariaLabel prop, use that value
      ariaLabelText = ariaLabel;
    }

    additionalTextareaProps['aria-label'] = ariaLabelText;

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
        {...additionalTextareaProps}
        ref={(textarea) => {
          this.textarea = textarea;
          if (refCallback) refCallback(textarea);
        }}
        name={name}
        onFocus={this.onFocus}
        onChange={this.onChange}
        placeholder={placeholder}
        required={required}
        rows={textareaRows}
        className={textareaClasses}
      />
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
Textarea.isTextarea = true;
Textarea.contextType = ThemeContext;

export default Textarea;
export { TextareaSize };
