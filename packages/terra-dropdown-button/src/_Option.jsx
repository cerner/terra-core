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
   */
  isActive: PropTypes.bool,
  /**
   * @private
   */
  isFocused: PropTypes.bool,
};

const Option = ({
  label, callback, isFocused, isActive,
}) => (
  <li>
    <div
      onMouseUp={callback}
      role="button"
      tabIndex="-1"
      className={cx([
        'option',
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
