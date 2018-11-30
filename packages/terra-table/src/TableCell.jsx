import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  children: PropTypes.node,
};

const TableCell = ({
  children,
  ...customProps
}) => (
  <td {...customProps} data-terra-table-cell>
    {children}
  </td>
);

TableCell.propTypes = propTypes;

export default TableCell;
