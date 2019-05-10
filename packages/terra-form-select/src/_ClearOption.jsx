import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Option from './_Option';
import styles from './_ClearOption.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The display text of the clear option.
   */
  display: PropTypes.string,
  /**
   * The value of the clear option.
   */
  value: PropTypes.string,
};

const ClearOption = ({ display, value, ...customProps }) => (
  <Option
    {...customProps}
    className={cx(['clear-option', customProps.className])}
    display={display}
    value={value}
    isSelected={false}
    data-terra-select-clear-option
  />
);

ClearOption.propTypes = propTypes;
ClearOption.isOption = true;

export default ClearOption;
