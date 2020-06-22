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
   * Id of the Switch label.
   */
  labelId: PropTypes.string.isRequired,
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
    labelId,
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

  const handleOnMouseDown = (event) => {
    event.preventDefault();
    removeFocusStyles(sliderButton.current);
  };

  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      enableFocusStyles(sliderButton.current);
    }
  };

  const handleOnBlur = () => {
    restoreFocusStyles(sliderButton.current);
  };

  const switchClassNames = cx([
    'switch',
    { 'is-disabled': isDisabled },
  ]);

  const trayClassNames = cx([
    'tray',
    { 'is-selected': isChecked },
    { 'is-disabled': isDisabled },
  ]);

  const sliderClassNames = cx([
    'slider',
    { 'is-disabled': isDisabled },
  ]);

  const statusLabelText = isChecked ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

  const mainClasses = classNames(cx(
    'switch-wrapper',
    theme.className,
  ),
  customProps.className);

  delete customProps.className;
  return (
    <div {...customProps} className={mainClasses}>
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <label
        htmlFor={switchId}
        onKeyDown={handleOnKeyDown}
        onMouseDown={handleOnMouseDown}
        onBlur={handleOnBlur}
      >
        <div className={switchClassNames}>
          <div className={cx('label-container')}>
            <div id={labelId} className={cx('label-text')}>{labelText}</div>
            <div className={cx('status-label-text')}>{statusLabelText}</div>
          </div>
          <div className={trayClassNames}>
            <input
              type="button"
              id={switchId}
              disabled={isDisabled}
              aria-checked={isChecked}
              aria-labelledby={labelId}
              className={sliderClassNames}
              role="switch"
              tabIndex="0"
              onClick={handleOnClick}
              data-terra-switch-show-focus-styles
              ref={sliderButton}
            />
          </div>
        </div>
      </label>
    </div>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
