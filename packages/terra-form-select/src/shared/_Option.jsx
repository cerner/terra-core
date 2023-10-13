import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
// eslint-disable-next-line import/no-extraneous-dependencies
import VisuallyHiddenText from 'terra-visually-hidden-text';
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
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
  intl,
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

  let itemLabel;
  let notSelectedText;
  if (index === 1 || isSelected) {
    itemLabel = `${expandedStateText}`;
  }

  if (!isSelected && SharedUtil.isMac() && SharedUtil.isSafari() && variant !== 'tag' && variant !== 'multiple') {
    notSelectedText = intl.formatMessage({ id: 'Terra.form.select.notselected' }, { text: notSelectedText });
  }

  if (SharedUtil.isSafari() && !('ontouchstart' in window)) {
    if (variant === 'tag' || variant === 'multiple') {
      role = 'checkbox';
    }
  }

  return (
    <li
      role={role}
      {...customProps}
      disabled={disabled}
      className={optionClassNames}
      aria-selected={isSelected} // Needed to allow screen reader to announce selected state
      aria-disabled={disabled}
      tabIndex="0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
      data-terra-select-option
    >
      {(isCheckable || isAddOption) && <span className={cx('icon')} />}
      <VisuallyHiddenText text={itemLabel} />
      <span className={cx('display')}>{display}</span>
      <VisuallyHiddenText text={notSelectedText} />
    </li>
  );
};

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
Option.isOption = true;

export default injectIntl(Option);
