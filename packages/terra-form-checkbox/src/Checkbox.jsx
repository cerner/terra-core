import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Checkbox.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The input type. This is always set to checkbox.
   */
  type: PropTypes.string,
  /**
    * The checked property of the Input element. Use this to generate a controlled Control Element.
    */
  checked: PropTypes.bool,
  /**
    * The checked property of the Input element. Use this to generate an uncontrolled Control Element.
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
   * Whether the control element is disabled or not.
   */
  isDisabled: PropTypes.bool,
  /**
    * Whether the control element is inline or not.
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
  type: 'checkbox',
  checked: undefined,
  defaultChecked: false,
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
    this.getFocusClass = this.getFocusClass.bind(this);
  }

  onFocus() {
    this.setState({ focus: true });
  }

  onBlur() {
    this.setState({ focus: false });
  }

  getFocusClass() {
    if (this.state.focus === false) {
      return '';
    }
    return cx(['focus']);
  }

  render() {
    const {
      type,
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

    const controlClasses = cx([
      'control',
      customProps.className,
    ]);

    const labelTextClasses = cx([
      'label',
      labelTextAttrs.className,
    ]);

    const inputClasses = cx([
      'input',
      inputAttrs.className,
    ]);

    return (
      <div className={`${controlClasses} ${this.getFocusClass()}`} >
        <input
          type={type}
          id={id}
          disabled={isDisabled}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={inputClasses}
          {...controlInputAttrs}
        />
        <label htmlFor={id} className={labelTextClasses} >{labelText} </label>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
