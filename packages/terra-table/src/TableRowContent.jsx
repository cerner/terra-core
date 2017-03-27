import React, { PropTypes } from 'react';

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
  const heightProperty = {
    'data-max-height': height,
  };
  return (
    <td {...heightProperty} {...customProps}>
      <div>{display}</div>
    </td>
  );
};

TableRowContent.propTypes = propTypes;

export default TableRowContent;
