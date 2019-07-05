import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text that is displayed on the option.
   */
  label: PropTypes.string.isRequired,
  /**
   * The function that is called when the option is clicked or enter/space is pressed with it focused.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * @private
   * Whether or not the option should show active styles
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * Whether or not the option should show keyboard focus styles
   */
  isFocused: PropTypes.bool,
  /**
   * @private
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func,
};

/* eslint-disable jsx-a11y/click-events-have-key-events */
// Keyboard events are handled in _DropdownButton.jsx
const Option = ({
  label, onClick, isFocused, isActive, requestClose, ...customProps
}) => (
  <li>
    <div
      {...customProps}
      onClick={() => { onClick(); requestClose(); }}
      role="button"
      tabIndex="-1"
      className={cx([
        'button',
        { focus: isFocused },
        { active: isActive },
      ])}
    >
      {label}
    </div>
  </li>
);

Option.propTypes = propTypes;

export default Option;
