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
  /**
   * @private
   * Variant of select component
   */
  variant: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  display: undefined,
};

const Option = ({
  disabled,
  display,
  value,
  variant,
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

  const role = (variant === 'tag' || variant === 'multiple') ? 'checkbox' : 'radio';

  return (
    <span
      role={role}
      {...customProps}
      disabled={disabled}
      className={optionClassNames}
      aria-checked={isSelected}
      aria-disabled={disabled}
      tabIndex="0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
      data-terra-select-option
    >
      {(isCheckable || isAddOption) && <span className={cx('icon')} />}
      <span className={cx('display')}>{display}</span>
    </span>
  );
};

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
Option.isOption = true;

export default Option;
