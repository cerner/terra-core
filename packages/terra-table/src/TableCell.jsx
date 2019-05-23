import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any.isRequired,
};

const TableCell = ({
  content,
  ...customProps
}) => (
  <td {...customProps} data-terra-table-cell>
    {content}
  </td>
);

TableCell.propTypes = propTypes;

export default TableCell;
