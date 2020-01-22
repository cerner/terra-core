import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Content to be displayed for the row cell.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const TableCell = ({
  children,
  ...customProps
}) => (
  <td {...customProps}>
    {children}
  </td>
);

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
