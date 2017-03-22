import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  display: PropTypes.any.isRequired,
  /**
   * The maximum height for the cell content in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

const TableRowContent = ({
  display,
  height,
  ...customProps
  }) => {
  const contentClassName = classNames([
    { [`terra-Table-height-${height}`]: height },
    'terra-Table-content',
  ]);
  return (
    <td {...customProps}>
      <div className={contentClassName}>{display}</div>
    </td>
  );
};

TableRowContent.propTypes = propTypes;

export default TableRowContent;
