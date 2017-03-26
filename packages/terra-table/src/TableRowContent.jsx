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
  if(height) {
    customProps['data-max-height'] = height;
  }
  
  return (
    <td {...customProps}>
      <div>{display}</div>
    </td>
  );
};

TableRowContent.propTypes = propTypes;

export default TableRowContent;
