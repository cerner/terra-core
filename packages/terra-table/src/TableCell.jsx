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
   * Whether or not the parent row is selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * @private
   * Id of the helper text identifying a row is selectable. Populates the aria-describedby attribute
   * of the child cells in this row.
   */
  selectRowHelpTextId: PropTypes.string,

};

const defaultProps = {
  isSelectable: undefined,
  selectRowHelpTextId: undefined,
};

const TableCell = ({
  content,
  isSelectable,
  selectRowHelpTextId,
  ...customProps
}) => (
  <td role="gridcell" {...customProps} aria-describedby={isSelectable ? selectRowHelpTextId : undefined} data-terra-table-cell>
    {content}
  </td>
);

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
