import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Checkbox.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
    * The checked property of the Input element. Use this to generate a controlled Checkbox Element.
    */
  checked: PropTypes.bool,
  /**
    * The checked property of the Input element. Use this to generate an uncontrolled Checkbox Element.
    */
  defaultChecked: PropTypes.bool,
  /**
    * The id of the input field.
    */
  id: PropTypes.string,
  /**
    * Additional attributes for the input object.
    */
  inputAttrs: PropTypes.object,
  /**
   * Whether the checkbox element is disabled or not.
   */
  isDisabled: PropTypes.bool,
  /**
    * Whether the checkbox element is inline or not.
    */
  isInline: PropTypes.bool,
  /**
    * Whether the label is hidden or not.
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
    * Function to trigger when user clicks on the input. Provide a function to create a controlled input.
    */
  onChange: PropTypes.func,
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
  onChange: undefined,
  value: undefined,
};

class Checkbox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { focus: false };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({ focus: true });
    if (this.inputAttrs !== undefined && this.inputAttrs.onFocus !== undefined) {
      this.inputAttrs.onFocus();
    }
  }

  onBlur() {
    this.setState({ focus: false });
    if (this.inputAttrs !== undefined && this.inputAttrs.onBlur !== undefined) {
      this.inputAttrs.onBlur();
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
      onChange,
      value,
      ...customProps
    } = this.props;

    const controlInputAttrs = Object.assign({}, inputAttrs);

    if (checked !== undefined) {
      controlInputAttrs.checked = checked;
    } else {
      controlInputAttrs.defaultChecked = defaultChecked;
    }

    const checkboxClasses = cx([
      'checkbox',
      { focus: this.state.focus },
      { 'checkbox-inline': isInline },
      customProps.className,
    ]);

    const labelTextClasses = cx([
      'label-text',
      labelTextAttrs.className,
    ]);

    const inputClasses = cx([
      'hidden-input',
      inputAttrs.className,
    ]);

    return (
      <div className={checkboxClasses} >
        <input
          {...controlInputAttrs}
          type="checkbox"
          id={id}
          disabled={isDisabled}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={inputClasses}
        />
        <label htmlFor={id} className={labelTextClasses} >{labelText} </label>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
