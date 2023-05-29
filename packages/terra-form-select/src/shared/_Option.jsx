import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import SharedUtil from './_SharedUtil';
import styles from './_Option.module.scss';

const cx = classNamesBind.bind(styles);

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
  /**
   * @private
   * The index of the option.
   */
  index: PropTypes.number,
  /**
   * @private
   * Number of options in the list.
   */
  totalOptions: PropTypes.number,
  /**
   * @private
   * The i18n value of the text "OF".
   */
  ofText: PropTypes.string,
  /**
   * @private
   * The i18n value of the text "Expanded combobox".
   */
  expandedStateText: PropTypes.string,
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
  index,
  totalOptions,
  ofText,
  expandedStateText,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const optionClassNames = classNames(
    cx(
      'option',
      { 'is-active': isActive },
      { 'is-checkable': isCheckable && !isAddOption },
      { 'is-default': !isCheckable && !isAddOption },
      { 'is-disabled': disabled },
      { 'is-selected': isSelected },
      { 'is-add-option': isAddOption },
      theme.className,
    ),
    customProps.className,
  );

  let role = 'option'; // Used for JAWs and VoiceOver on iOS

  /**
   * VoiceOver in Safari on desktop has issues with role="option" with the combination of the
   * aria-live section we have and will stutter when reading options.
   * Switching to role="radio" and role="checkbox" mitigates this behavior.
   */
  if (SharedUtil.isSafari() && !('ontouchstart' in window)) {
    role = 'radio';

    if (variant === 'tag' || variant === 'multiple') {
      role = 'checkbox';
    }
  }

  let label = display;
  // Allows VO to announce index of items
  if (SharedUtil.isMac() && index && totalOptions) {
    label = `${display} (${index} ${ofText} ${totalOptions})`;
  }
  const itemLabel = isSelected || index === 1 ? `${expandedStateText} ${label}` : label;

  return (
    <li
      role={isSelected ? 'tab' : role}
      {...customProps}
      disabled={disabled}
      className={optionClassNames}
      aria-selected={isSelected} // Needed to allow VoiceOver on iOS to announce selected state
      aria-disabled={disabled}
      tabIndex="0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
      data-terra-select-option
      aria-label={itemLabel}
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
