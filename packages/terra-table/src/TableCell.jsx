import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any.isRequired,
  /**
   * @private
   * Id of the helper text identifying a row is selectable. Populates the aria-describedby attribute
   * of the child cells in this row.
   */
  selectRowHelpTextId: PropTypes.string,
};

const defaultProps = {
  selectRowHelpTextId: undefined,
};

const TableCell = ({
  content,
  selectRowHelpTextId,
  ...customProps
}) => (
  <td role="gridcell" {...customProps} aria-describedby={customProps.onKeyDown ? selectRowHelpTextId : undefined} data-terra-table-cell>
    {content}
  </td>
);

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
