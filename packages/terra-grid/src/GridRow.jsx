import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Grid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The component that will be displayed at column level.
   */
  children: PropTypes.node.isRequired,
  /**
   * Custom class name that can be assigned to grid row.
   */
  className: PropTypes.string,
};

const GridRow = ({ className, children, ...customProps }) => (
  <div {...customProps} className={cx('grid', className)}>
    {children}
  </div>
);

GridRow.propTypes = propTypes;

export default GridRow;
