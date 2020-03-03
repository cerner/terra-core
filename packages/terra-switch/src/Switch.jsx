import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

// Translations Required
const SWITCH_STATE = Object.freeze({
  ON: 'On',
  OFF: 'Off',
});

const propTypes = {
  /**
   * Id of the Switch button
   */
  id: PropTypes.string.isRequired,
  /**
   * Id of the Switch label
   */
  labelId: PropTypes.string.isRequired,
  /**
   * Whether or not the Switch is checked ("ON").
   */
  checked: PropTypes.bool,
  /**
   * Whether or not the Switch is disabled ("ON").
   */
  disabled: PropTypes.bool,
  /**
   * The label of the Switch component.
   */
  label: PropTypes.node.isRequired,
  /**
   * Callback function when switch value changes from ON / OFF.
   * Parameters: 1. event 2. switch value
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  checked: false,
  disabled: false,
  onChange: undefined,
};

const Switch = ({
  id,
  labelId,
  checked,
  disabled,
  onChange,
  label,
  ...customProps
}) => {
  const sliderButtonRef = useRef(null);

  const handleClick = (event) => {
    sliderButtonRef.current.focus();
    if (onChange) {
      onChange(event, checked);
    }
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      sliderButtonRef.current.focus();
      if (onChange) {
        onChange(event, checked);
      }
    }
  };

  const switchClassNames = cx([
    'switch',
  ]);

  const trayClassNames = cx([
    'tray',
    { selected: checked },
    { unselected: !checked },
    { 'is-disabled': disabled },
  ]);

  const sliderClassNames = cx([
    'slider',
    { 'is-disabled': disabled },
  ]);

  const statusLabelText = checked ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

  return (
    <div className={cx('switch-wrapper')}>
      <label htmlFor={id}>
        <div className={cx('switch-container')}>
          <div className={cx('label-container')}>
            <span id={labelId} className={cx('label-text')}>{label}</span>
            <span className={cx('status-label-text')}>{statusLabelText}</span>
          </div>
          <div className={switchClassNames}>
            <span className={trayClassNames}>
              <button
                {...customProps}
                type="button"
                id={id}
                disabled={disabled}
                aria-checked={checked}
                aria-labelledby={labelId}
                className={sliderClassNames}
                role="switch"
                tabIndex="0"
                onClick={handleClick}
                onKeyDown={handleOnKeyDown}
                onKeyUp={handleKeyUp}
                ref={sliderButtonRef}
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
