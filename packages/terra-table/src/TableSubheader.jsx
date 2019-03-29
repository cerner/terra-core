import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed in the subheader row
   */
  content: PropTypes.node.isRequired,

  /**
   * Number of columns the subheader must span
   */
  colSpan: PropTypes.number,
};

const TableSubheader = ({
  content,
  colSpan,
  ...customProps
}) => (
  // count is based on the number of columns and assigned in the table component which contains this subheader
  <tr role="rowheader" data-terra-table-subheader-row>
    <td {...customProps} className={cx('subheader', customProps.className)} colSpan={colSpan}>
      {content}
    </td>
  </tr>
);

TableSubheader.propTypes = propTypes;

export default TableSubheader;
