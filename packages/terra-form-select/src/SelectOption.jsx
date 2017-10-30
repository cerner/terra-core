import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './SelectOption.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Option value.
   */
  value: PropTypes.string.isRequired,
  /**
   * Option display text.
   */
  display: PropTypes.string,
  /**
   * Indicates if option should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Indicates the option is selected (only one option can be selected at a time).
   */
  isSelected: PropTypes.bool,
  /**
   * This should be used when custom option display content is needed. If both children and display are set, only display will be used.
   */
  children: PropTypes.node,
};

const defaultProps = {
  disabled: false,
  isSelected: false,
};

const SelectOption = ({ value, display, disabled, isSelected, children, ...customProps }) => {
  const attributes = Object.assign({}, customProps);

  attributes.tabIndex = disabled ? '-1' : '0';
  attributes['aria-disabled'] = disabled;

  if (disabled) {
    delete attributes.onClick;
    delete attributes.onKeyDown;
  }

  const optionClassNames = cx([
    'option',
    { 'is-disabled': disabled },
    { 'is-selected': isSelected },
    attributes.className,
  ]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <li
      {...attributes}
      role="option"
      className={optionClassNames}
      data-value={value}
      disabled={disabled}
    >
      {display || children}
    </li>
  );
};

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;
export default SelectOption;
