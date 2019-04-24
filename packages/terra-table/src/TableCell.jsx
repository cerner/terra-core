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
   * Whether or not the parent row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * @private
   * Id of the helper text identifying a row is selectable. Populates the aria-describedby attribute
   * of the child cells in this row.
   */
  selectableRowHelpTextId: PropTypes.string,
  /**
   * @private
   * Id of the helper text identifying a row is selected. Populates the aria-describedby attribute
   * of the child cells in this row.
   */
  selectedRowHelpTextId: PropTypes.string,
};

const defaultProps = {
  isSelectable: undefined,
  isSelected: undefined,
  selectedRowHelpTextId: undefined,
  selectableRowHelpTextId: undefined,
};

const TableCell = ({
  content,
  isSelectable,
  isSelected,
  selectableRowHelpTextId,
  selectedRowHelpTextId,
  ...customProps
}) => {
  const ariaDescribedByAttributes = [];

  if (isSelectable && selectableRowHelpTextId) {
    ariaDescribedByAttributes.push(selectableRowHelpTextId);
  }

  if (isSelected && selectedRowHelpTextId) {
    ariaDescribedByAttributes.push(selectedRowHelpTextId);
  }

  const ariaDescribedBy = ariaDescribedByAttributes.length > 0 ? ariaDescribedByAttributes.join(' ') : undefined;

  return (
    <td role="gridcell" {...customProps} aria-describedby={ariaDescribedBy} data-terra-table-cell>
      {content}
    </td>
  );
};

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
