import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const TableHeaderCellMinWidth = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const propTypes = {
  /**
   * Content to be displayed for the column header
   */
  children: PropTypes.node,
  /**
   * The minimum width for the column
   */
  minWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

const defaultProps = {
  children: [],
  minWidth: 'small',
};

const TableHeaderCell = ({
  children,
  minWidth,
  ...customProps
}) => {
  const contentClassName = cx([
    { [`min-width-${minWidth}`]: minWidth },
    customProps.className,
  ]);

  return (
    <th {...customProps} data-terra-table-header-cell className={contentClassName}>
      {children}
    </th>
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
export { TableHeaderCellMinWidth };
