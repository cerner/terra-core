import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Status.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the status indicator. Accepts a CSS color value.
   */
  color: PropTypes.string,
};

const Status = ({ color, children, ...customProps }) => (
  <div {...customProps} style={{ borderColor: color }} className={cx('status', customProps.className)} >
    {children}
  </div>
);

Status.propTypes = propTypes;

export default Status;
