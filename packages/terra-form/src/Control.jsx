import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import Input from './Input';

import './Control.scss';

const propTypes = {
  /**
   * The input type
   */
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  /**
   * The checked property of the Input element. Use this to generate a controlled Control Element
   */
  checked: PropTypes.bool,
  /**
   * The checked property of the Input element. Use this to generate an uncontrolled Control Element
   */
  defaultChecked: PropTypes.bool,
  /**
   * id of the input field
   */
  id: PropTypes.string,
  /**
   * Additional attributes for the input object
   */
  inputAttrs: PropTypes.object,
  /**
   * Whether the form element is inline or not
   */
  isInline: PropTypes.bool,
  /**
   * Text of the label
   */
  labelText: PropTypes.node,
  /**
   * Additional objects for the text object
   */
  labelTextAttrs: PropTypes.object,
  /**
   * Name of the input attribute
   */
  name: PropTypes.string,
  /**
   * The Value of the input element
   */
  value: PropTypes.string,
};

const defaultProps = {
  type: null,
  checked: undefined,
  defaultChecked: undefined,
  id: undefined,
  inputAttrs: {},
  isInline: false,
  labelText: null,
  labelTextAttrs: {},
  name: null,
  value: undefined,
};

const Control = ({ type, checked, defaultChecked, inputAttrs, id, isInline, labelText, labelTextAttrs, name, value, ...customProps }) => {
  const labelClassNames = classNames(
    'terra-Form-control',
    { 'terra-Form-control--inline': isInline },
    customProps.className,
  );

  const labelTextClasses = classNames(
    'terra-Form-control-label-text',
    labelTextAttrs.className,
  );

  const controlInputAttrs = Object.assign({}, inputAttrs);

  if (checked !== undefined) {
    controlInputAttrs.checked = checked;
  } else {
    controlInputAttrs.defaultChecked = defaultChecked;
  }

  return (
    <label htmlFor={id} {...customProps} className={labelClassNames}>
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        {...controlInputAttrs}
      />
      <span {...labelTextAttrs} className={labelTextClasses}>{labelText}</span>
    </label>
  );
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
