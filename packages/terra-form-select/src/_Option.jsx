import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_Option.module.scss';

const cx = classNames.bind(styles);

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
   * @private
   * Whether the option is active.
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * Whether the option is a custom text entry.
   */
  isAddOption: PropTypes.bool,
  /**
   * @private
   * Whether the option is checkable.
   */
  isCheckable: PropTypes.bool,
  /**
   * @private
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * The value of the option. The value must be unique.
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
