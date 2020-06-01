import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Option from './_Option';
import styles from './_ClearOption.module.scss';

const cx = classNamesBind.bind(styles);

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

const ClearOption = ({ display, value, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Option
      {...customProps}
      className={classNames(cx('clear-option', theme.className), customProps.className)}
      display={display}
      value={value}
      isSelected={false}
      data-terra-select-clear-option
    />
  );
};

ClearOption.propTypes = propTypes;
ClearOption.isOption = true;

export default ClearOption;
