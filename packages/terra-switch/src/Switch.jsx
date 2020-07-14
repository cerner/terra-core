import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { FormattedMessage } from 'react-intl';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { removeFocusStyles, restoreFocusStyles } from './_SwitchUtils';
import styles from './Switch.module.scss';

const cx = classNamesBind.bind(styles);

const SWITCH_STATE = Object.freeze({
  ON: <FormattedMessage id="Terra.switch.switchstatuslabel.on" />,
  OFF: <FormattedMessage id="Terra.switch.switchstatuslabel.off" />,
});

const propTypes = {
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
    isChecked,
    isDisabled,
    onChange,
    labelText,
    ...customProps
  } = props;
  const theme = React.useContext(ThemeContext);
  const sliderButton = useRef();

  const handleOnClick = useCallback((event) => {
    // Need this for focus styles on IE running on OS X since it does not receive focus when clicked.
    sliderButton.current.focus();
    if (onChange) {
      onChange(!isChecked, event);
    }
  }, [isChecked, onChange]);

  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      restoreFocusStyles(sliderButton.current);
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

  const statusLabelText = isChecked ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

  const switchClassNames = classNames(cx(
    'switch',
    { 'is-enabled': !isDisabled },
    { 'is-disabled': isDisabled },
    { 'is-selected': isChecked },
    theme.className,
  ),
  customProps.className);

  let switchAttrs;
  if (!isDisabled) {
    switchAttrs = {
      tabIndex: '0',
      onBlur: handleOnBlur,
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onKeyDown: handleOnKeyDown,
    };
  } else {
    switchAttrs = {
      'aria-disabled': true,
    };
  }

  return (
    <div
      {...customProps}
      {...switchAttrs}
      aria-label={labelText}
      aria-checked={isChecked}
      role="switch"
      className={switchClassNames}
      data-terra-switch-show-focus-styles
      ref={sliderButton}
    >
      <div aria-hidden className={cx('label-container')}>
        <div className={cx('label-text')}>{labelText}</div>
        <div className={cx('status-label-text')}>{statusLabelText}</div>
      </div>
      <div aria-hidden className={cx('tray')}>
        <div className={cx('slider')} />
      </div>
    </div>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
