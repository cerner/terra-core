import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './TableCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  children: PropTypes.node,
};

const TableCell = ({
  children,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
    customProps.className,
  ]);

  return (
    <td {...customProps} className={cellClassNames}>
      {children}
    </td>
  );
}

TableCell.propTypes = propTypes;

export default TableCell;
