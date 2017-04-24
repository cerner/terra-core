import React, { PropTypes } from 'react';
import classNames from 'classnames';
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
  }) => {
  const contentClassName = classNames([
    'terra-Table-cell',
    customProps.className,
  ]);

  return (
    <td {...customProps} className={contentClassName}>
      {content}
    </td>
  );
};

TableCell.propTypes = propTypes;

export default TableCell;
