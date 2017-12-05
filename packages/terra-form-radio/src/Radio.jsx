import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ClinicalRadio.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
    * Whether or not the radio element is checked. Use this to generate a controlled radio element.
    */
  checked: PropTypes.bool,
  /**
    * The checked property of the Input element. Use this to generate an uncontrolled radio element.
    */
  defaultChecked: PropTypes.bool,
  /**
    * The id of the radio.
    */
  id: PropTypes.string,
  /**
    * Additional attributes for the input object.
    */
  inputAttrs: PropTypes.object,
  /**
    * Whether the radio element is disabled.
    */
  isDisabled: PropTypes.bool,
  /**
    * Whether the radio element is inline.
    */
  isInline: PropTypes.bool,
  /**
    * Whether the label is hidden.
    */
  isLabelHidden: PropTypes.bool,
  /**
    * Text of the label.
    */
  labelText: PropTypes.node.isRequired,
  /**
    * Additional objects for the text object.
    */
  labelTextAttrs: PropTypes.object,
  /**
    * Name of the input attribute.
    */
  name: PropTypes.string,
  /**
   * Function to trigger when focus is lost from the radio.
   */
  onBlur: PropTypes.func,
  /**
    * Function to trigger when user clicks on the radio. Provide a function to create a controlled input.
    */
  onChange: PropTypes.func,
    /**
   *  Function to trigger when user focuses on the radio.
   */
  onFocus: PropTypes.func,
  /**
    * The value of the input element.
    */
  value: PropTypes.string,
};

const defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  id: undefined,
  inputAttrs: {},
  isDisabled: false,
  isInline: false,
  isLabelHidden: false,
  labelText: null,
  labelTextAttrs: {},
  name: null,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
};

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: false };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({ focus: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur() {
    this.setState({ focus: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  render() {
    const {
      checked,
      defaultChecked,
      inputAttrs,
      id,
      isDisabled,
      isInline,
      isLabelHidden,
      labelText,
      labelTextAttrs,
      name,
      onBlur,
      onChange,
      onFocus,
      value,
      ...customProps
    } = this.props;

    const controlInputAttrs = Object.assign({}, inputAttrs);

    if (checked !== undefined) {
      controlInputAttrs.checked = checked;
    } else {
      controlInputAttrs.defaultChecked = defaultChecked;
    }

    const radioClasses = cx([
      'radio',
      { 'radio-inline': isInline },
      customProps.className,
    ]);

    const focusContainer = cx([
      { 'is-hidden-focus-container': isLabelHidden },
      { 'focus-container': isLabelHidden === false },
      { focus: this.state.focus },
    ]);

    const labelClasses = cx([
      'label',
      { 'is-disabled': isDisabled },
      labelTextAttrs.className,
    ]);

    const inputClasses = cx([
      'native-input',
      inputAttrs.className,
    ]);

    const labelTextClasses = cx([
      'label-text',
      { 'is-hidden': isLabelHidden },
    ]);

    const outerRingClasses = cx([
      'outer-ring',
    ]);

    const innerRingClasses = cx([
      'inner-ring',
    ]);

    let inputContainer = null;
    let customRadioContainer = null;
    let labelTextContainer = null;
    if (isLabelHidden) {
      inputContainer = (<input
        {...controlInputAttrs}
        aria-label={labelText}
        type="radio"
        id={id}
        disabled={isDisabled}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        className={inputClasses}
      />);
      // customRadioContainer = (<span {...labelTextAttrs} className={outerRingClasses}>
      //   <span className={innerRingClasses} /></span>);
    } else {
      inputContainer = (<input
        {...controlInputAttrs}
        type="radio"
        id={id}
        disabled={isDisabled}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        className={inputClasses}
      />);
      labelTextContainer = <span className={labelTextClasses}>{labelText}</span>;
    }
    customRadioContainer = (<span {...labelTextAttrs} className={outerRingClasses}>
      <span className={innerRingClasses} /></span>);

    return (
      <div className={radioClasses}>
        <div className={focusContainer}>
          <label htmlFor={id} className={labelClasses}>
            {inputContainer}
            {customRadioContainer}
            {labelTextContainer}
          </label>
        </div>
      </div>
    );
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
