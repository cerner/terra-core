import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_Option.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text that is displayed on the option.
   */
  label: PropTypes.string.isRequired,
  /**
   * The function that is called when the option is clicked or enter/space is pressed with it focused.
   */
  callback: PropTypes.func.isRequired,
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

const Option = ({
  label, callback, isFocused, isActive, requestClose, ...customProps
}) => (
  <li>
    <div
      onMouseUp={() => { callback(); requestClose(); }}
      role="button"
      tabIndex="-1"
      className={cx([
        'option',
        { focus: isFocused },
        { active: isActive },
      ])}
      {...customProps}
    >
      {label}
    </div>
  </li>
);

Option.propTypes = propTypes;

export default Option;
