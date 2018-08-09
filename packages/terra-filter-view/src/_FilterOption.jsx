import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_FilterOption.module.scss';

const cx = classNames.bind(styles);

/* Disabling validation for controlled props. These props will always be overwritten. */
/* eslint react/prop-types: [2, { ignore: [isActive, isSelected, isCheckable, isAddOption] }] */
/* isActive {boolean} - True if the component is active. */
/* isAddOption {boolean} - True if the option is a new custom text entry. */
/* isCheckable {boolean} - True if the component is checkable. */
/* isSelected {boolean} - True if the component is selected. */
const propTypes = {
  /**
   * Whether the option is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The display text of the option.
   */
  display: PropTypes.string,
  /**
   * The value of the option.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const defaultProps = {
  disabled: false,
  display: undefined,
};

const Option = ({
  disabled,
  display,
  value,
  isActive,
  isSelected,
  isCheckable,
  isAddOption,
  ...customProps
}) => {
  const optionClassNames = cx([
    'option',
    { 'is-active': isActive },
    { 'is-checkable': isCheckable && !isAddOption },
    { 'is-default': !isCheckable && !isAddOption },
    { 'is-disabled': disabled },
    { 'is-selected': isSelected },
    { 'is-add-option': isAddOption },
    customProps.className,
  ]);

  return (
    <li
      {...customProps}
      role="option"
      disabled={disabled}
      className={optionClassNames}
      aria-selected={isSelected}
      aria-disabled={disabled}
    >
      {(isCheckable || isAddOption) && <span className={cx('icon')} />}
      <span className={cx('display')}>{display}</span>
    </li>
  );
};

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
Option.isOption = true;

export default Option;
