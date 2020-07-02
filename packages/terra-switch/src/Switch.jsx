import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { FormattedMessage } from 'react-intl';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { enableFocusStyles, removeFocusStyles, restoreFocusStyles } from './_SwitchUtils';
import styles from './Switch.module.scss';

const cx = classNamesBind.bind(styles);

const SWITCH_STATE = Object.freeze({
  ON: <FormattedMessage id="Terra.switch.switchstatuslabel.on" />,
  OFF: <FormattedMessage id="Terra.switch.switchstatuslabel.off" />,
});

const propTypes = {
  /**
   * Id of the Switch button.
   */
  switchId: PropTypes.string.isRequired,
  /**
   * Whether or not the Switch is checked ("ON").
   */
  isChecked: PropTypes.bool,
  /**
   * Whether or not the Switch is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * The label text of the Switch component.
   */
  labelText: PropTypes.string.isRequired,
  /**
   * Callback function when switch value changes from ON / OFF.
   * Returns Parameters: 1. switch value 2. event.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  isChecked: false,
  isDisabled: false,
  onChange: undefined,
};

const Switch = (props) => {
  const {
    switchId,
    isChecked,
    isDisabled,
    onChange,
    labelText,
    ...customProps
  } = props;
  const theme = React.useContext(ThemeContext);
  const sliderButton = useRef();

  const handleOnClick = useCallback((event) => {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will set focus on the button when clicked.
    sliderButton.current.focus();
    if (onChange) {
      onChange(!isChecked, event);
    }
  }, [isChecked, onChange]);

  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      enableFocusStyles(sliderButton.current);
      if (onChange) {
        onChange(!isChecked, event);
      }
    }
  };

  const handleOnMouseDown = (event) => {
    event.preventDefault();
    removeFocusStyles(sliderButton.current);
  };

  const handleOnBlur = () => {
    restoreFocusStyles(sliderButton.current);
  };

  const labelClassNames = cx([
    'label-text',
    { 'is-disabled': isDisabled },
  ]);

  const statusLabelClassNames = cx([
    'status-label-text',
    { 'is-disabled': isDisabled },
  ]);

  const trayClassNames = cx([
    'tray',
    { 'is-selected': isChecked },
    { 'is-disabled': isDisabled },
  ]);

  const sliderClassNames = cx([
    'slider',
    { 'is-selected': isChecked },
    { 'is-disabled': isDisabled },
  ]);

  const statusLabelText = isChecked ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

  const switchClassNames = classNames(cx(
    'switch',
    { 'is-disabled': isDisabled },
    theme.className,
  ),
  customProps.className);

  delete customProps.className;
  let switchAttrs;
  if (!isDisabled) {
    switchAttrs = {
      tabIndex: '0',
      onBlur: handleOnBlur,
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onKeyDown: handleOnKeyDown,
    };
  }

  return (
    <div
      {...customProps}
      {...switchAttrs}
      id={switchId}
      disabled={isDisabled}
      aria-checked={isChecked}
      role="switch"
      className={switchClassNames}
      data-terra-switch-show-focus-styles
      ref={sliderButton}
    >
      <div className={cx('label-container')}>
        <div className={labelClassNames}>{labelText}</div>
        <div className={statusLabelClassNames}>{statusLabelText}</div>
      </div>
      <div className={trayClassNames}>
        <div className={sliderClassNames} />
      </div>
    </div>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
