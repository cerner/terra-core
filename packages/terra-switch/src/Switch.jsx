import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

// Translations Required
const SWITCH_STATE = Object.freeze({
  ON: 'On',
  OFF: 'Off',
});

const propTypes = {
  /**
   * Id of the Switch button.
   */
  id: PropTypes.string.isRequired,
  /**
   * Id of the Switch label.
   */
  labelId: PropTypes.string.isRequired,
  /**
   * Whether or not the Switch is checked ("ON").
   */
  checked: PropTypes.bool,
  /**
   * Whether or not the Switch is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The label of the Switch component.
   */
  label: PropTypes.node.isRequired,
  /**
   * Callback function when switch value changes from ON / OFF.
   * Parameters: 1. switch value 2. event.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  checked: false,
  disabled: false,
  onChange: undefined,
};

const Switch = (props) => {
  const {
    id,
    labelId,
    checked,
    disabled,
    onChange,
    label,
    ...customProps
  } = props;

  const sliderButton = useRef();

  const handleClick = (event) => {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will set focus on the button when clicked.
    sliderButton.current.focus();
    if (onChange) {
      onChange(checked, event);
    }
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === KEY_SPACE || event.keyCode === KEY_RETURN) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === KEY_SPACE || event.keyCode === KEY_RETURN) {
      if (onChange) {
        onChange(checked, event);
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

  let mainClasses = cx('switch-wrapper');
  if (customProps.className) {
    mainClasses = `${mainClasses} ${customProps.className}`;
  }

  delete customProps.className;

  return (
    <div className={mainClasses} {...customProps}>
      <label htmlFor={id}>
        <div className={cx('switch-container')}>
          <div className={cx('label-container')}>
            <span id={labelId} className={cx('label-text')}>{label}</span>
            <span className={cx('status-label-text')}>{statusLabelText}</span>
          </div>
          <div className={switchClassNames}>
            <span className={trayClassNames}>
              <button
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
                ref={sliderButton}
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
