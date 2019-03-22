import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
import RadioUtil from './_RadioUtil';

const cx = classNames.bind(styles);

const propTypes = {
  /**
    * Whether or not the radio button is checked. Use this to generate a controlled radio button.
    */
  checked: PropTypes.bool,
  /**
    * The checked property of the Input element. Use this to generate an uncontrolled radio button.
    */
  defaultChecked: PropTypes.bool,
  /**
    * The id of the radio button.
    */
  id: PropTypes.string,
  /**
    * Additional attributes for the input object.
    */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttrs: PropTypes.object,
  /**
    * Whether the radio button is disabled.
    */
  disabled: PropTypes.bool,
  /**
    * Whether the radio button is inline.
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
    * Additional attributes for the text object.
    */
  // eslint-disable-next-line react/forbid-prop-types
  labelTextAttrs: PropTypes.object,
  /**
    * Name attribute of the input.
    */
  name: PropTypes.string,
  /**
   * Function to trigger when focus is lost from the radio button.
   */
  onBlur: PropTypes.func,
  /**
    * Function to trigger when user clicks on the radio button. Provide a function to create a controlled input.
    */
  onChange: PropTypes.func,
  /**
   *  Function to trigger when user focuses on the radio button.
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
  disabled: false,
  isInline: false,
  isLabelHidden: false,
  labelTextAttrs: {},
  name: null,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
};

const Radio = ({
  checked,
  defaultChecked,
  inputAttrs,
  id,
  disabled,
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
}) => {
  const controlInputAttrs = Object.assign({}, inputAttrs);

  if (checked !== undefined) {
    controlInputAttrs.checked = checked;
  } else {
    controlInputAttrs.defaultChecked = defaultChecked;
  }

  const radioClasses = cx([
    'radio',
    { 'is-inline': isInline },
    customProps.className,
  ]);

  const labelClasses = cx([
    'label',
    { 'is-disabled': disabled },
    { 'is-hidden': isLabelHidden },
    { 'is-mobile': RadioUtil.isConsideredMobileDevice() },
    labelTextAttrs.className,
  ]);

  const inputClasses = cx([
    'native-input',
    inputAttrs.className,
  ]);

  const labelTextClasses = cx([
    'label-text',
  ]);

  const outerRingClasses = cx([
    'outer-ring',
    { 'is-mobile': RadioUtil.isConsideredMobileDevice() },
  ]);

  const innerRingClasses = cx([
    'inner-ring',
  ]);

  let labelTextContainer = null;
  if (isLabelHidden) {
    controlInputAttrs['aria-label'] = labelText;
    labelTextContainer = <span {...labelTextAttrs} className={labelTextClasses} />;
  } else {
    labelTextContainer = <span {...labelTextAttrs} className={labelTextClasses}>{labelText}</span>;
  }

  return (
    <div {...customProps} className={radioClasses}>
      <label htmlFor={id} className={labelClasses}>
        <input
          {...controlInputAttrs}
          type="radio"
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClasses}
        />
        <span className={outerRingClasses}>
          <span className={innerRingClasses} />
        </span>
        {labelTextContainer}
      </label>
    </div>
  );
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.isRadio = true;

export default Radio;
