import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  content: PropTypes.any.isRequired,
};

const TableCell = ({
  content,
  ...customProps
}) => (
  <td {...customProps} data-class="cell" className={customProps.classNames}>
    {content}
  </td>
);


TableCell.propTypes = propTypes;

export default TableCell;
