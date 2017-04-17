import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  content: PropTypes.any.isRequired,
  /**
   * The maximum height for the cell content in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

const TableCell = ({
  content,
  height,
  ...customProps
  }) => {
  const contentClassName = classNames([
    { [`terra-Table-row-max-height--${height}`]: height },
    'terra-Table-cell',
    customProps.className,
  ]);

  return (
    <td {...customProps} className={contentClassName}>
      <div>{content}</div>
    </td>
  );
};

TableCell.propTypes = propTypes;

export default TableCell;
