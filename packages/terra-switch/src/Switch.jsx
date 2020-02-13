/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

const SWITCH_STATE = Object.freeze({
  ON: 'On',
  OFF: 'Off',
});

const propTypes = {
  /**
    * Whether or not the Switch is enabled ("ON").
    */
  isOn: PropTypes.bool,

  /**
    * If true, the user won't be able to toggle the switch.
    */
  isDisabled: PropTypes.bool,

  /**
    * Text of the label.
    */
  labelText: PropTypes.node.isRequired,

  /**
    * Callback fired when the state is changed.
    */
  onChange: PropTypes.func,
};

const defaultProps = {
  isOn: false,
  isDisabled: false,
  onChange: undefined,
};

const Switch = ({
  isOn,
  isDisabled,
  onChange,
  labelText,
  ...customProps
}) => {
  const [focused, setFocus] = useState(false);
  const sliderButtonRef = useRef(null);

  const handleClick = (event) => {
    setFocus(true);
    sliderButtonRef.current.focus();
    onChange(event);
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      setFocus(true);
    }
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === KeyCode.KEY_TAB) {
      setFocus(true);
    } else if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      setFocus(true);
      onChange(event);
    }
  };

  const switchClassNames = cx([
    'switch',
    customProps.className,
  ]);

  const trayClassNames = cx([
    'tray',
    { selected: isOn },
    { unselected: !isOn },
    { 'is-disabled': isDisabled },
  ]);

  const sliderClassNames = cx([
    'slider',
    { 'is-disabled': isDisabled },
    { 'is-focused': focused },
  ]);

  const statusLabelText = isOn ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

  const attributes = { ...customProps };
  const switchButtonId = (attributes.id) ? attributes.id : `terra-switch-button-${uniqueid()}`;

  return (
    <div className={cx('switch-wrapper')}>
      <label
        htmlFor={switchButtonId}
      >
        <div className={cx('switch-container')}>
          <div className={cx('label-container')}>
            <span className={cx('label-text')}>{labelText}</span>
            <span className={cx('status-label-text')}>{statusLabelText}</span>
          </div>
          <div
            className={switchClassNames}
          >
            <span
              className={trayClassNames}
            >
              <button
                type="button"
                id={switchButtonId}
                disabled={isDisabled}
                aria-checked={isOn}
                aria-label={statusLabelText}
                className={sliderClassNames}
                role="switch"
                tabIndex="0"
                onClick={handleClick}
                onKeyDown={handleOnKeyDown}
                onKeyUp={handleKeyUp}
                onBlur={handleOnBlur}
                ref={sliderButtonRef}
                {...customProps}
              />
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
