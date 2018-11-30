import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed in the subheader row
   */
  children: PropTypes.node.isRequired,
  /**
   * Number of columns the subheader must span
   */
  colSpan: PropTypes.number,
};

const TableSubheader = ({
  children,
  colSpan,
  ...customProps
}) => (
  <tr data-terra-table-subheader-row>
    <td {...customProps} className={cx('subheader', customProps.className)} colSpan={colSpan}>
      {children}
    </td>
  </tr>
);

TableSubheader.propTypes = propTypes;

export default TableSubheader;
