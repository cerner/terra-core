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
  /**
   * Function callback for the ref of the td.
   */
  refCallback: PropTypes.func,
};

const TableCell = ({
  children,
  refCallback,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
    customProps.className,
  ]);

  return (
    <td {...customProps} className={cellClassNames} ref={refCallback} role="gridcell">
      {children}
    </td>
  );
};

TableCell.propTypes = propTypes;

export default TableCell;
