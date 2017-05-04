// eslint-disable react/jsx-boolean-value

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Input from './Input';

const propTypes = {
  /**
   * The input type
   */
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  /**
   * Additional attributes for the input object
   */
  attrs: PropTypes.object,
  /**
   * id of the input field
   */
  id: PropTypes.string,
  /**
   * Whether the form element is inline or not
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input
   */
  label: PropTypes.node,
  /**
   * Name of the input attribute
   */
  name: PropTypes.string,
  /**
   * Initial Value of the input
   */
  value: PropTypes.string,
};

const defaultProps = {
  type: null,
  attrs: {},
  id: undefined,
  isInline: false,
  label: null,
  name: null,
  value: undefined,
};

const Control = ({ type, attrs, id, isInline, label, name, value, ...customProps }) => {
  const labelClassNames = classNames(
    'terra-Form-control',
    { 'terra-Form-control--inline': isInline },
    customProps.className,
  );

  return (
    <label htmlFor={id} {...customProps} className={labelClassNames}>
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        {...attrs}
      />
      {label}
    </label>
  );
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
